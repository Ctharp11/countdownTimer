import styled from 'styled-components';

import { globals } from '../../globals';

const Container = styled.div`
    height: 150px;
`;

const Alert = styled.div`
    font-size: 18px;
    font-weight: 500;
    font-family: monospace;
    height: 25px;
`;

const Time = styled.div`
    font-size: 60px;
    font-weight: 400;
`;

export const Counter = ({ alertMessage, timeLeft }) => {

    const showCounter = () => {
        let styles = {};

        if (timeLeft.minutes === 0 && timeLeft.seconds <= 20) {
            styles = { color: globals.STYLES.TEN_SECONDS_LEFT_FULL }
        }

        if ((timeLeft.minutes === 0 && timeLeft.seconds <= 10) && timeLeft.seconds % 2 === 0) {
            styles = { color: globals.STYLES.TEN_SECONDS_LEFT_DIM }
        }

        return (
            <p style={ styles }>
            {timeLeft.minutes <= 9 ? `0${timeLeft.minutes}`: timeLeft.minutes}
            :
            {timeLeft.seconds <= 9 ? `0${timeLeft.seconds}`: timeLeft.seconds}
            </p>
        )
    }

    return (
        <Container>
            <Alert>
                {
                alertMessage && alertMessage
                }
            </Alert>
            <Time>
                {
                timeLeft && showCounter()
                }
            </Time>
        </Container>
    )
}