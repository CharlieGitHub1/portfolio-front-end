import styled from 'styled-components';

const NavBarStyle = styled.nav`
    text-align: center;

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;

        li {
            display: inline-block;
            margin: 0 5px;
            letter-spacing: 4px;
        }
    }
`;

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