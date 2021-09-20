import { Circle } from '../Circle';
import { FaBars } from "react-icons/fa";

// Components
import { SocialMedia } from '../SocialMedia';
import { NavBar } from '../Navbar';
import { HeaderStyle } from './styled';
import { useMobile } from '../../hooks/useMobile';

const Header = (props) => {
    return (
        <HeaderStyle>
            <div className='container'>
                <div className='logo'>
                    <div className='left'>
                        <Circle size='75px' />
                    </div>
                    <div className='right'>
                        <span>{props.logo_name}</span>
                    </div>
                </div>
                {useMobile(768) ?
                    <>
                        <NavBar items={props.nav_item} />
                        <div className='social-media'>
                            <SocialMedia nav={props.socialNav} />
                        </div>
                    </>
                    :
                    <div id='mobile-menu'>
                        <FaBars />
                    </div>
                }
            </div>
        </HeaderStyle>
    );
};

export { Header };