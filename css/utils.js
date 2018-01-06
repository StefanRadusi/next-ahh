import css from 'styled-jsx/css';

const utils = {
    red : '#FF3b3f',
    neutral : '#EFEFEF',
    neutral_fade: 'rgba(239,239,239,0.9)',
    sky : '#CAEBF2;',
    grey : '#054D4D',
    center: `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    `,
    boxShadow : 'box-shadow: 1px 1px 1px rgba(0,0,0,.2)',
    boxShadowNone : 'box-shadow: 1px 1px 1px rgba(0,0,0,0)',
    boxShadowAround : 'box-shadow: 0px 0px 3px rgba(0,0,0,0.2)'
};

export const svgBasic = css`
    svg {
        height: 300px;
    }

    @media (max-width: 400px) {
        svg {
            height: 200px;
        }
    }

    * {
        stroke : ${utils.red};
        stroke-width: 2;
        stroke-dasharray: 800;
        stroke-dashoffset: 0;
    }

`;

export const svgBasiRubric = css`
    svg {
        height: 200px;
    }

    @media (max-width: 400px) {
        svg {
            height: 100px;
        }
    }
`;


export default utils;