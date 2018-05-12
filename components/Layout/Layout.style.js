import css from 'styled-jsx/css';
import utils from '../../css/utils';

export default css`
    div.layout {
        width: 100%;
        height: 100%;
        background: ${utils.lightGrey};
        position: relative;
        overflow: hidden;
    }

    div.container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${utils.lightGrey};
        transition: transform .5s ease;
        box-shadow: -10px 4px 10px rgba(0, 0, 0, 0.2);
    }
    
    div.container.showMenu {
        transform: translateX(295px)
    }
`;