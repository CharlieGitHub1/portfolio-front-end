import styled from "styled-components";

export const SocialMediaStyle = styled.div`

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
            display: inline-block;

            a {
                color: #fff;
                margin: 0 20px;
                transition: color 200ms ease;

                &:hover, &:focus {
                    color: pink
                }
            }
        }
    }
`;
