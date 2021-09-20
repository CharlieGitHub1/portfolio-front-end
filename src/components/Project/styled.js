import styled from "styled-components";

export const ProjectStyle = styled.section`

    background: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    min-height: 400px;

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
