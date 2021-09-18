import { NavBarStyle } from './styled';

const NavBar = ({ items }) => {
    return (
        <NavBarStyle>
            <ul>
                {items.map((item, i) => {
                    return (
                        <li key={`nav-item-${i}`}>
                            {item.label}
                        </li>
                    )
                })}
            </ul>
        </NavBarStyle>
    );
};

export { NavBar };