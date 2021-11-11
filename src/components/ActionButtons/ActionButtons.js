import styled from 'styled-components';

import { globals } from '../../globals';
import { Button } from '../../core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
    > * {
        margin: 10px 2.5px;
        width: 65px;
        height: 35px;
    }
`;

const PauseButton = styled.button`
    height: 0;
    width: 0;
    background: transparent;
    border: none;
`;

export const ActionButtons = ({ speed, setSpeed, onPause, isPaused }) => {
    return (
        <Container>
            <Button
                className={`button ${speed.name === globals.SPEED.DEFAULT.name ? 'is-primary' : 'is-light'}`}
                type="button"
                onClick={() => setSpeed(globals.SPEED.DEFAULT)}
                name={globals.SPEED.DEFAULT.name}>
            </Button>
            <Button
                className={`button ${speed.name === globals.SPEED.ONEHALF.name ? 'is-primary' : 'is-light'}`}
                type="button"
                onClick={() => setSpeed(globals.SPEED.ONEHALF)}
                name={globals.SPEED.ONEHALF.name}> 
            </Button>
            <Button
                className={`button ${speed.name === globals.SPEED.DOUBLE.name ? 'is-primary' : 'is-light'}`}
                type="button"
                onClick={() => setSpeed(globals.SPEED.DOUBLE)}
                name={globals.SPEED.DOUBLE.name}> 
            </Button>
            <PauseButton type="button" onClick={onPause}> 
                {isPaused ? <FontAwesomeIcon size="2x" icon="play-circle" /> : <FontAwesomeIcon size="2x" icon="pause-circle" />}
            </PauseButton>
        </Container>
    )
}