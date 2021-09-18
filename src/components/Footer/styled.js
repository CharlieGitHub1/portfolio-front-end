import styled from "styled-components";

export const FooterStyle = styled.footer`

    background: #000 linear-gradient(179.92deg, rgba(255, 255, 255, 0.71) -127.1%, rgba(0, 0, 0, 0.6) 84.66%);
    color: #ffff;
    padding: 2em 0;

    // Circle div
    .circle-wrapper {
        margin: 0 0 2em;

        & > div {
            margin: 0 auto;
        }
    }

    // Footer Navigation Styles
    .wrapper {
        display: flex;

        .column {
            flex: 1 1 33%;
            text-align: center;

            h2 {
                margin: 0 0 10px;
            }

            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;

                li {
                    margin: 0 0 5px;
                }
            }
        }
    }// end footer nav styles

    // Social Media
    .social {
        text-align: center;
        margin: 50px 0;

        a {
            font-size: 1.2em;
        }
    }

    // Copyright
    .charlescc {
        text-align: center;
        margin: .5em 0;
    }

`;
