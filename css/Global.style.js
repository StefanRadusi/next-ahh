import css from 'styled-jsx/css';

export default css`
    * {
        margin: 0;
        font-family: Roboto
    }

    html, body, body > div:nth-child(1), #__next, #__next > div {
        width: 100%;
        height: 100%;
        position: relative;
    }
`;