import { FaInstagram, FaLinkedin, FaPinterestSquare } from "react-icons/fa";

// Styles
import { SocialMediaStyle } from './styled';

const SocialMedia = ({ nav }) => {

    /**
     * 
     * @param {*} iconName can be one of: 'instagram', 'pinterest', 'linkedin'
     * @returns 
     */
    const showIcon = (iconName) => {
        if (iconName === 'instagram') return <FaInstagram />;
        if (iconName === 'linkedin') return <FaLinkedin />;
        if (iconName === 'pinterest') return <FaPinterestSquare />;
    }

    return (
        <SocialMediaStyle>
            <ul>
                {nav.map((item) => {
                    return (
                        <li>
                            <a href={item.href}>
                                {showIcon(item.icon)}
                            </a>
                            <span className='off-screen'>
                                {item.label}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </SocialMediaStyle>
    )
}

export { SocialMedia }