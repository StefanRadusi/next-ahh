import css from 'styled-jsx/css';

export const baisicBageStyle = css`
    div.basicPage {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: relative;
    }
`;

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

    .page-transition-enter {
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    .page-transition-enter-active {
        width: 100%;
        height: 100%;
        opacity: 1;
        transition: opacity .5s ease;
    }

    .page-transition-enter-done {
        width: 100%;
        height: 100%;
        //opacity: 1;
       // transition: opacity .5s ease;
    }
    
    .page-transition-exit {
        width: 100%;
        height: 100%;
        opacity: 1;
    }

    .page-transition-exit-active {
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity .5s ease;
    }

    .page-transition-exit-done {
        width: 100%;
        height: 100%;
        //opacity: 0;
        //transition: opacity .5s ease;
    }
`;
