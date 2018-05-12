import css from 'styled-jsx/css';
import utils from '../../../css/utils';


export default css`
    div.menuButton {
        width: 60px;
        height: 60px;
        position: fixed;
        top: 10px;
        left: 10px;
        border: 1px solid ${utils.grey};
        border-radius: 50%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: opacity .3s ease;   
    }

    svg.shirt {
        opacity: 1;
    }

    svg.shirt.hide {
        opacity: 0;
    }

    svg.close {
        opacity: 0;
    }

    svg.close line {
        stroke: ${utils.red}
    }

    svg.close.show {
        opacity: 1;
    }
`;