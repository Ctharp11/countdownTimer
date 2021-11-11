import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment-timezone';

import { globals } from '../../globals';

const Container = styled.div`
    margin: 25px;
    display: inline-block;

    * {
        text-align: left;
    }

    p {
        font-size: 14px;
    }

    div {
        margin: 5px 0;
    }

    th, td {
        padding-right: 25px;
        font-weight: 500;
        vertical-align: bottom;
    }

    td {
        font-size:18px;
    }

    @media screen and (max-width: 400px) {
        td, th {
          font-size: 14px;
          margin-top: 10px;
        }
    }
`;

export const TimeZones = ({ timeLeft, speed, isPaused }) => {
    const [seconds, setSeconds] = useState('');
    const date = new Date();

    useEffect(() => {
        if (timeLeft) {
            if (speed.name === globals.SPEED.ONEHALF.name) {
                setSeconds(((timeLeft.minutes * 60) + timeLeft.seconds) / 1.5);
            }
            else if (speed.name === globals.SPEED.DOUBLE.name) {
                setSeconds(((timeLeft.minutes * 60) + timeLeft.seconds) / 2);
            }
            else {
                setSeconds((timeLeft.minutes * 60) + timeLeft.seconds)
            }
        }
    }, [timeLeft]);

    return (
        <Container>
            <p>Estimated Deployment Time </p>
            <table>
                <thead>
                    <tr>
                        <th>London</th>
                        {
                            seconds ? 
                            <td><Moment
                                tz={globals.TIME.ZONES.LONDON}
                                format={globals.TIME.FORMAT}
                                add={{ seconds: seconds }}>{date}</Moment>
                            </td>
                            : <td>--</td>
                        }
                    </tr>
                    <tr>
                        <th>New York</th>
                        {
                            seconds ? 
                            <td><Moment
                                tz={globals.TIME.ZONES.NEW_YORK}
                                format={globals.TIME.FORMAT}
                                add={{ seconds: seconds }}>{date}</Moment>
                            </td>
                            : <td>--</td>
                        }
                    </tr>
                    <tr>
                        <th>Salt Lake City</th>
                        {
                            seconds ? 
                            <td><Moment
                                tz={globals.TIME.ZONES.SALT_LAKE_CITY}
                                format={globals.TIME.FORMAT}
                                add={{ seconds: seconds }}>{date}</Moment>
                            </td>
                            : <td>--</td>
                        }
                    </tr>
                </thead>
            </table>
        </Container>
    )
}