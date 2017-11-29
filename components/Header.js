import Link from 'next/link';
import {Component} from 'react';
import css from '../css/utils';
import { setTimeout } from 'timers';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            showPages : false,
            runAnimation : false,
            animating : false 
        };
    }

    showPages(event) {
        if(!this.state.animating) {
            this.state.showPages = true;
            this.state.runAnimation = true;
            this.state.animating = true;
            this.setState(this.state);
            setTimeout(() => {
                this.state.animating = false;
                this.setState(this.state);
            }, 500);
        }
    }
    
    hidePages() {
        if(!this.state.animating) {
            this.state.runAnimation = false;
            this.state.animating = true;
            this.setState(this.state);
            setTimeout(() => {
                this.state.showPages = false;
                this.state.animating = false;
                this.setState(this.state);
            }, 500);
        }
    }

    render() {

        return (
            <div className='header'>
                <div className='line'></div>
                <div className='container'>
                    <div className='menuIcon' onMouseEnter={this.showPages.bind(this)} onClick={this.state.showPages ? this.hidePages.bind(this) : this.showPages.bind(this)}>
                        <img src='./static/haihuiLogo.png' />
                        <p> Menu </p>
                        <svg height="40" width="46" viewBox="0 0 100 100" className="blick">
                            <circle cx="49" cy="47" fill="none" />
                        </svg>
                        <svg height="20px" width="20px" className={this.state.showPages ? 'expande show' :  'expande hide'} viewBox='0 0 100 100'>
                            <path/>
                        </svg>
                    </div>
                    <div className={this.state.showPages ? 'pages show' :  'pages'} onMouseLeave={this.hidePages.bind(this)}>
                        <ul>
                            {
                                ['Photo-video', 'Print', 'Personalizari', 'Contact'].map((col, i) => (
                                    <li key={i}>
                                        <div className={this.state.runAnimation ? 'page show' :  'page hide'} style={{animationDelay: `.${i}s`}}>
                                            <a>
                                                <div>
                                                    <img src={`./static/headerIcons/${col}.png`}/>
                                                </div>
                                                <p> {col} </p>
                                            </a>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {/* {
                    this.headerStructure.map(page => (
                        <div key={page.name} className='page'>
                            <p> { page.name } </p>
                            <img src={'./static/' + page.name + '.png'} />
                        </div>    
                    ))
                } */}
                <style jsx>
{
`div.header {
    position:fixed;
    top: 0;
    left: 0;
    width: calc(100% - 20px);
    height: 40px;
    padding: 10px;
}

div.line {
    position:absolute;
    top:50%;
    transform: translateY(-50%);
    left:0;
    width:100%;
    height:40%;
    background:${css.sky};
    z-Index:-1;
    
}

div.container {
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: auto;
}

div.menuIcon {
    height: 100%;
    display: flex;
    align-items : center;
    position: relative;
    cursor: default;
}

div.menuIcon img { 
    height: 100%;
}

div.menuIcon p {
    font-size: 20px;
    margin : 5px;
    font-weight : bold;
    color : ${css.grey}
}

svg.blick {
    position: absolute;
    top: 0;
    left: 0;
}


@keyframes blinck {
    50% {
        stroke-width: 15;
        
    }

    100% {
        stroke-width: 0;
        r : 40;
        stroke-dasharray : 13; 
    }
}

svg.blick circle {
    stroke-width: 0;
    r: 6;
    stroke : ${css.grey};
    stroke-dasharray : 13;
}

div.menuIcon:hover svg.blick circle {
    animation: blinck 1s ease;
}

div.pages {
   display: none;
}

// div.pages div.page {
//     opacity: 0;
// }

div.pages.show {
    display: block;
}

// div.pages.show div.page {
//     opacity: 0;
// }

ul {
    list-style-type: none;
    margin : 0;
    padding: 0;
    padding-top: 5px;
    margin-left: 5px;
}

li {
    // background: ${css.sky};
    opacity: 0.9;
    margin-bottom: 4px;
    transform: scale(1);
    box-shadow: 1px 1px 1px rgba(0,0,0,0);
    border-radius: 25px;
    
    transition: all .2s ease;
    
}

li: hover {
    opacity: 1;
    box-shadow: 1px 1px 1px rgba(0,0,0,.3);
    transform: scale(1.01);
}


div.page {
    background: ${css.sky};
    border-radius: 25px;
    opacity: 0;
    
    //transform: translateY(15px);
}

@keyframes show {
    0% {
        opacity: 0;
        transform: translateY(15px);
    }
    
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

@keyframes hide {
    0% {
        opacity: 1;
        transform: translateY(0px);
    }
    
    100% {
        opacity: 0;
        transform: translateY(-15px);
    }
}

div.page.show {
    opacity:0;
    animation: show 0.5s ease forwards;
}

div.page.hide {
    opacity:1;
    animation: hide 0.5s ease forwards;
}

a {
    display: flex;
    align-items: center;
}

a img {
    height: 18px;
    background-color: ${css.grey};
    ${css.center};    
}

a p {
    font-size: 15px;
    margin : 0;
    margin-left: 5px;
}

a div {
    height: 35px;
    width: 35px;
    position: relative;
    // margin-left: 8px;
    border-radius: 25px;

    background-color: ${css.grey};
}

svg.expande {
    margin-left: auto;
}

svg.expande path {
    stroke: ${css.grey};
    stroke-width: 9;
    fill:none;
    stroke-linejoin : round;
    transition: all .2s ease;

    d : path("M10,10 L70,50 L10,90 L10,10 L70,50"); 
}

@keyframes expande {
    0% {
        d : path("M10,10 L70,50 L10,90 L10,10 L70,50"); 
    }

    50% {
        d : path("M10,10 L80,10 L10,10 L10,10 L10,10");
    }

    100% {
        fill: ${css.grey};
        d : path("M10,20 L90,20 L50,80 L10,20 L90,20");
    }
}

@keyframes dexpande {
    0% {
        fill: ${css.grey};
        d : path("M10,20 L90,20 L50,80 L10,20 L90,20");
    }
    
    50% {
        d : path("M10,10 L80,10 L10,10 L10,10 L10,10");
    }
    
    100% {
        fill: none;
        d : path("M10,10 L70,50 L10,90 L10,10 L70,50"); 
    }
}

svg.expande.show path {
    //d : path("M10,20 L90,20 L50,80 L10,20 L90,20");

    animation: expande .5s ease forwards;
}

svg.expande.hide path {
    //d : path("M10,20 L90,20 L50,80 L10,20 L90,20");

    animation: dexpande .5s ease forwards;
}
`
}
                </style>
            </div>
        )
    }
}

export default Header;