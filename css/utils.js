import css from 'styled-jsx/css';

const utils = {
    lightGrey: '#F2F2F2',
    grey: '#c1c1c1',
    red : '#FF3b3f',
    neutral : '#EFEFEF',
    neutral_fade: 'rgba(239,239,239,0.9)',
    sky : '#CAEBF2;',
    darkGreen : '#054D4D',
    green : '#0c9e9e',
    center: `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    `,
    boxShadow : 'box-shadow: 1px 1px 1px rgba(0,0,0,.2)',
    boxShadowNone : 'box-shadow: 1px 1px 1px rgba(0,0,0,0)',
    boxShadowAround : 'box-shadow: 0px 0px 3px rgba(0,0,0,0.2)',
    defaultFontSize : 'font-size : 15px'
}

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
        strokeWidth: 2;
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

export const photoVideoOferta = css`
    div.ofertaPhotoVideo {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    div.descriereOferta {
        padding: 5px;
        display: flex;
        flex-wrap:wrap;
    }
    
    div.descriereOferta > div {
        width: calc(50% - 10px);
        padding: 5px;

    }

    @media (max-width: 900px) {
        div.descriereOferta > div {
            width: calc(100% - 10px);
        }
    }


    div.descriereOferta p {
        font-size: 20px;
        margin: 0;
        padding: 10px;
        padding-bottom: 0px;
        border-bottom: 2px solid ${utils.sky};
    }
    
    ul {
        font-size: 15px;
        margin-bottom: 10px;
        margin-top: 0;
        
    }
    
    div.tabelOferte {
        width: calc(100% - 10px);
        padding: 5px;
        overflow: auto;
    }
    
    div.tabelOferte table {
        width : 100%;
        font-size: 13px;
        border-collapse: collapse;
    }
    
    div.tabelOferte th {
        font-size: 15px;
        border-bottom: 2px solid ${utils.sky};
        padding: 5px;
    }
    
    div.tabelOferte td {
        text-align: center;
        padding: 5px;
    }
    
    
    div.bonus {
        width: calc(100% - 10px);
        padding: 5px;
    }
    
    div.bonus p {
        font-size: 15px;
        font-weight: bold;
        color: ${utils.red};
        margin: 0;
        padding: 5px;
    }

    @media (max-width: 400px) {
        div.descriereOferta p {
            font-size: 15px;
        }

        ul {
            font-size: 10px;
        }

        div.tabelOferte td {
            font-size: 10px;
        }

        div.tabelOferte th {
            font-size: 12px;
        }
    }
`;


export default utils;