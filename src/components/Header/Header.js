import { Circle } from '../Circle';

// Components
import { SocialMedia } from '../SocialMedia';
import { NavBar } from '../Navbar';
import { HeaderStyle } from './styled';

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
                <NavBar items={props.nav_item} />
                <div className='social-media'>
                    <SocialMedia nav={props.socialNav} />
                </div>
            </div>
        </HeaderStyle>
    );
};

export { Header };