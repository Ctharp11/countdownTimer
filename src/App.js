import React, { useEffect, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'

import { globals } from './globals';
import { TimeInput, Counter, ActionButtons, TimeZones } from './components';

import './App.css';

library.add(faPlayCircle, faPauseCircle)

export const App = () => {
  let [countDownTime, setCountDownTime] = useState('');
  let [timeLeft, setTimeLeft] = useState('');
  let [speed, setSpeed] = useState(globals.SPEED.DEFAULT);
  let [isPaused, setIsPaused] = useState(false);
  let [alertMessage, setAllertMessage] = useState('');
  let halfOfCountDownTime = (countDownTime * 60) / 2;
  let timer;

  useEffect(() => {
    let currentTimeLeftInTotalSeconds = (timeLeft.minutes * 60) + timeLeft.seconds;

    if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      return setAllertMessage(globals.ALERT.COMPLETED);
    } 
    if (timeLeft) {
      timer = setInterval(() => {
        calculateTimeLeft();
      }, speed.value);
    }
    if (halfOfCountDownTime === (currentTimeLeftInTotalSeconds + 1)) {
      setAllertMessage(globals.ALERT.HALFWAY);
    }
    return () => disableCounter();
  }, [timeLeft]);

  const startTimer = () => {
    if (!countDownTime) return;
    setAllertMessage('');
    setIsPaused(false);
    if (timer) clearInterval(timer);
    let obj = {
      minutes: countDownTime,
      seconds: 0
    }
    setTimeLeft(obj)
  }

  const calculateTimeLeft = () => {
    if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      return disableCounter();
    }
    if (timeLeft.minutes >= 0 && timeLeft.seconds >= 0) {
      setTimeLeft({
        minutes: timeLeft.seconds === 0 ? timeLeft.minutes -= 1 : timeLeft.minutes,
        seconds: timeLeft.seconds === 0 ? timeLeft.seconds = 59 : timeLeft.seconds -= 1
      })
    }
  };

  const onPause = () => {
    if (!countDownTime) return;
    if (isPaused) {
      calculateTimeLeft();
    }
    else {
      disableCounter();
    }
    setIsPaused(!isPaused);
  }

  const disableCounter = () => {
    clearInterval(timer);
  }

  return (
    <div className="App box">
      <section>
        <TimeInput
          setCountDownTime={setCountDownTime}
          countDownTime={countDownTime}
          startTimer={startTimer}
        />
      </section>
      <section>
        <Counter
          alertMessage={alertMessage}
          timeLeft={timeLeft}
        />
      </section>
      <section>
        <ActionButtons
          speed={speed}
          setSpeed={setSpeed} 
          onPause={onPause}
          isPaused={isPaused}/>
      </section>
      <section>
        <TimeZones timeLeft={timeLeft} speed={speed} isPaused={isPaused} />
      </section>
    </div>
  );
}