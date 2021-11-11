import styled from 'styled-components';

import { Button, Input } from '../../core'

const Container = styled.div`
display: flex;
justify-content: center;
> * {
    margin: 10px 2px;
}
`;

export const TimeInput = ({ setCountDownTime, countDownTime, startTimer }) => {

    const onTimeChange = (input) => {
        const isInteger = /^[0-9]+$/;
        if (input === '' || isInteger.test(input)) {
            setCountDownTime(input);
        }
    }

    return (
        <Container>
            <div>
                <Input
                    onChange={(e) => onTimeChange(e.target.value)}
                    className="input"
                    type="text"
                    value={countDownTime}
                    placeholder="Min"
                />
            </div>
            <div>
                <Button
                    className="button is-primary"
                    type="button"
                    onClick={startTimer}
                    name="Start"
                />
            </div>
        </Container>
    )
}