import {Component} from 'react';
import css from '../../css/utils';

class Banner extends Component {
    render() {
        return (
            <div className='animatedTitleSection'>
                <div className='title'>
                    <p>{this.props.text}</p>
                </div>
               {this.props.svg()}

               <style jsx>{
`
div.animatedTitleSection {
    display: flex;
    border: 4px solid ${css.sky};
    border-radius: 8px;
    transition: all 0.2s ease;
    ${css.boxShadowNone};
}

div.animatedTitleSection:hover {
    cursor: pointer;
    transform: scale(1.005);
    ${css.boxShadow};
}

div.animatedTitleSection > div {
    display:flex;
    align-items: center;
    flex: 1;
}

p {
    width: 100%;
    text-align: center;
    font-size: 40px;
    margin: 10px;
}

@media (max-width: 400px) {
    p {
        font-size: 20px;
    }
}

svg {
    flex: 1;
}

`
               }</style>
            </div>
        )
    }
}

export default Banner;