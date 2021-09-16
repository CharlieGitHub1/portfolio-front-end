import { Circle } from "../Circle"
import { FooterStyle } from './styled';

const Footer = ({
    title_one,
    title_two,
    title_three,
    nav_items_one,
    nav_items_two,
    nav_items_three,
    copyright
}) => {

    const renderNavItems = (items, title) => {
        return (
            <div className='column'>
                <h2>{title}</h2>
                <ul>
                    {items.map(({ label }) => {
                        return (
                            <li>
                                {label}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    return (
        <FooterStyle>
            <div className='container'>
                <div>
                    <Circle size="50px" />
                </div>
                <div className="wrapper">
                    {renderNavItems(nav_items_one, title_one)}
                    {renderNavItems(nav_items_two, title_two)}
                    {renderNavItems(nav_items_three, title_three)}
                </div>
                <div>
                    <p>socialNav</p>
                </div>
                <div>
                    <p>{copyright}</p>
                </div>


            </div>
        </FooterStyle>
    )
}

export { Footer }