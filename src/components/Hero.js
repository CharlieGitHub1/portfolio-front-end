import styled from 'styled-components';

// Components
import { Circle } from './Circle';

const HeroStyle = styled.div`
    background: #000000;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1 {
        font-size: 7em;
        color: #fff;
        font-weight: 400;
        letter-spacing: 30px;
        font-family: 'Six Caps';
    }
    h2 {
        font-size: 1.5em;
        color: #E082Af;
    }

    .wrapper {
        max-width: 80%;
        margin: 0 auto;

        .top {
            display: flex;

            & > div {
                flex: 1 1 50%;
            }
        }
    }
`;

/**
 * @param {string} title - Hero main title
 * @param {string} sub_title - Hero sub title
 */
const Hero = ({ title, sub_title }) => {

    return (
        <HeroStyle>
            <div className="wrapper">
                <div className="top">
                    <div className="left">
                        <h1>{title}</h1>
                        <h2>{sub_title}</h2>
                    </div>
                    <div className="right">
                        <Circle size='100px' />
                    </div>
                </div>
                <div className="bottom">
                    toggle button
                </div>
            </div>
        </HeroStyle>
    )
}

export { Hero };