import styled from 'styled-components';

const size = (size) => `
    height: ${size};
    width: ${size};
    margin: auto;
`;

/**
 * @param {'clockwise' | 'counterclockwise'} style
 * @param {number} speed - Seconds
 */
const animation = (style, speed) => `
    animation: ${style} 20s linear infinite;
`;

export const CircleStyle = styled.div`

    position: relative;
    height: ${({ circleSize }) => circleSize};
    width: ${({ circleSize }) => circleSize};
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));

    svg {
        height: 100%;
        width: 100%;
        filter: brightness(0) invert(1);
    }
    
    .circle {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        &:nth-child(1) {
            animation: clockwise 20s linear infinite;
            ${animation('clockwise', 40)};
            ${size('90%')};
        }

        &:nth-child(2) {
            ${animation('counterclockwise', 15)};
            ${size('82%')};
        }

        &:nth-child(3) {
            animation: clockwise 45s linear infinite;
            ${size('74%')};
        }
    }

    @keyframes clockwise {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    @keyframes counterclockwise {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
    }

`;
