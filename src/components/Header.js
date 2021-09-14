import styled from 'styled-components';
import { Circle } from './Circle';

// Components
import { NavBar } from './Navbar';

const HeaderStyle = styled.header`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: auto;
    color: #fff;

    .container {
        max-width: 95vw;
        margin: 0 auto;
        padding: 10px 0;
        display: flex;
        align-items: flex-end;

        .logo {
            display: flex;
            align-items: center;
            flex: 1 1 33%;

            .right {
                margin: 0 0 0 20px;
            }
        }
        nav {
            flex: 1 1 33%
        }
        .social-media {
            flex: 1 1 33%;
        }
    }
`;

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
                    Social Links Here
                </div>
            </div>
        </HeaderStyle>
    );
};

export { Header };