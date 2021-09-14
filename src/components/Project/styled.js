import styled from "styled-components";

export const ProjectStyle = styled.section`

    background: #000 linear-gradient(179.92deg, rgba(255, 255, 255, 0.71) -127.1%, rgba(0, 0, 0, 0.6) 84.66%);

    .container {
        display: flex;
        align-items: center;

        .left {
            flex: 1 33%;
            color: #ffffff;
            padding: 1em;

            .heading {
                display: flex;
                align-items: center;
            }
        }
        .right {
            flex: 1 66%;
        }
    }
`;
