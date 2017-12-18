import {Component} from 'react';
import css from '../../css/utils';

class Banner extends Component {
    state = {
        hover : false
    }

    animateSvg() {
        this.state.hover = true;
        this.setState(this.state);
    }

    removeAnimationSvg() {
        this.state.hover = false;
        this.setState(this.state);
    }

    componentDidMount() {
        console.log('mount');
    }

    render() {
        return (
            <div className='animatedTitleSection' onMouseEnter={this.animateSvg.bind(this)} onMouseLeave={this.removeAnimationSvg.bind(this)}>
                <div className='title'>
                    <p>{this.props.text}</p>
                </div>
                <this.props.svg
                    hover = {this.state.hover}
                />

               <style jsx>{
`
div.animatedTitleSection {
    display: flex;
    border: 4px solid ${css.sky};
    border-radius: 8px;
    transition: all 0.2s ease;
    margin-bottom: 10px;
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
    min-width:40%;
}

p {
    width: 100%;
    text-align: center;
    font-size: 50px;
    margin: 10px;
    font-family: 'Amatic SC', cursive;
    text-decoration: none;
    color: ${css.grey}
}

@media (max-width: 600px) {
    p {
        font-size: 30px;
    }
}

@media (max-width: 500px) {
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