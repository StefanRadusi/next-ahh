import css from '../../../css/utils';
import cssJsxFunc from 'styled-jsx/css';
import ReactSvg from 'react-svg';

const addButtonStyle = cssJsxFunc`
    div.addButtonContainer {
        height: 30px;
        display: flex;
        align-items: center;
        position: relative;
        padding: 5px;
        overflow: hidden;
    }    

    :global(.addButtonSvg) {
        width : 30px;
        height: 30px;
    }

    :global(.addButtonSvg *) {
        stroke-dasharray: 200;
        stroke-dashoffset: 0;
        stroke: ${css.green};
        strokeWidth: 2;
        fill: none;
        transition: all .5s ease;
    }

    div.addButtonContainer:hover :global(.addButtonSvg *) {
        stroke-dashoffset: 200;
    }
    
    :global(.svgWrapperDiv) {
        width : 30px;
        height: 30px;
        ${css.center};
    }

    p {
        ${css.defaultFontSize};
        min-width: 40px;
        text-align: center;
        opacity: 0;
        transform: translateY(30px);
        transition: transform .5s ease, opacity .2s;
        cursor: default;
    }
    
    div.addButtonContainer:hover p {
        transform: translateY(0px);
        opacity: 1;
    }

`;

const AddButton = (props) => (
    <div className='addButtonContainer' onClick={props.onClick}>
        <ReactSvg
            path="./static/svg/plus.svg"
            className="addButtonSvg"
            wrapperClassName="svgWrapperDiv"
        />
        <p>{props.text || 'Add'}</p>
        
        <style jsx>{addButtonStyle}</style>
    </div>
);

export default AddButton;