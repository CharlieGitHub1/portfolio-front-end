import styled from "styled-components";

export const HeroStyle = styled.div`
    background: #000000;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 860px){
        height: auto;
    }
    
    h1 {
        font-size: 7em;
        color: #fff;
        font-weight: 400;
        letter-spacing: 3px;
        font-family: 'Six Caps';

        @media screen and (max-width: 1100px){
            font-size: 5em;
        }
    }
    h2 {
        font-size: 1.5em;
        color: #E082Af;
    }

    .wrapper {
        max-width: 80%;
        margin: 100px auto 0;

        .top {
            display: flex;
            @media screen and (max-width: 860px){
                flex-wrap: wrap;
            }

            & > div {
                position: relative;
                @media screen and (max-width: 860px){
                    flex: 1 1 100% !important;
                    text-align: center;
                }

                &.left {
                    flex: 1 1 55%;
                }
                &.right {
                    flex: 1 1 45%;

                    & > div {
                        margin: 0 0 0 auto;
                        @media screen and (max-width: 860px){
                            margin: 0 auto;
                        }
                    }
                }
            }
        }
    }
`;