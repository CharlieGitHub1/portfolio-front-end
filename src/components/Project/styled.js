import styled from "styled-components";

const bgColor = '#000';

export const ProjectStyle = styled.section`

    background: ${bgColor} url(${({ background }) => background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;

    &:hover .left {
        transition: all 300ms ease-in-out;
        background: transparent !important;
        opacity: .0;
    }

    .container {
        display: flex;
        align-items: center;
        

        .left {
            background: #00000096;
            flex: 1 100%;
            text-align: center;
            color: #ffffff;
            padding: 1em;

            .heading {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 15px;

                & > span {
                    display: inline-block;
                    margin-right: 20px;
                }
            }
        }
        .right {
            flex: 1 1 0;
        }
    }
`;
