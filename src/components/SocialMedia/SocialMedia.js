import { FaInstagram, FaLinkedin, FaPinterestSquare } from "react-icons/fa";

// Styles
import { SocialMediaStyle } from './styled';

const SocialMedia = ({ nav }) => {

    /**
     * 
     * @param {'instagram' | 'linkedin' | 'pinterest'} iconName
     * @returns {JSX.Element}
     * @see https://react-icons.github.io/react-icons/icons?name=fa
     * @example showIcon('linkedin')
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