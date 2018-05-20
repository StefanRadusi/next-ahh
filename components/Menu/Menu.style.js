import css from 'styled-jsx/css';
import utils from '../../css/utils';

export default css`
    div.menu {
        padding: 10px;
        background: ${utils.darkGreen};
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
    }

    p {
        color: white;
        margin-left: 10px;
        font-size: 18px;
    }

    div.page {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-bottom: 20px;
    }

    @media only screen and (max-device-width: 320px) {
        p {
            font-size: 16px;
        }
    }
`;