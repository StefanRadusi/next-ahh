import css from 'styled-jsx/css';
import utils from '../../css/utils';

export default css`
    div.landing {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    h3 {
        color: ${utils.darkGreen};
        width: 200px;
        text-align: center;
    }

    svg.haihui {
        width: 80%;
        height:60%;
    }
`;