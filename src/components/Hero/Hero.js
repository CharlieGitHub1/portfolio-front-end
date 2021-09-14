// Components
import { Circle } from '../Circle';
import { HeroStyle } from './styled';

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
                        <Circle size='300px' />
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
