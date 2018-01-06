import Link from 'next/link';
import {Component} from 'react';
import css from '../css/utils';

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
            <div className={this.props.homePage ? 'header hasBanner' : 'header'}>
                <div className='line'></div>
                <div className='container'>
                    <div className='menuIcon' onClick={this.state.showPages ? this.hidePages.bind(this) : this.showPages.bind(this)}>
                        <img src='./static/haihuiLogo.png' />
                        <p> Menu </p>
                        <svg height="40" width="46" viewBox="0 0 100 100" className="blick">
                            <circle cx="49" cy="47" fill="none" />
                        </svg>
                        <svg height="20px" width="20px" className={this.state.showPages ? 'expande show' :  'expande hide'} viewBox='0 0 100 100'>
                            <path/>
                        </svg>
                    </div>
                    <div className={this.state.showPages ? 'pages show' :  'pages'} >
                        <ul>
                            {
                                ['Home', 'PhotoVideo', 'Print', 'Personalizari', 'Contact'].map((col, i) => (
                                    <li key={i}>
                                        <div className={this.state.runAnimation ? 'page show' :  'page hide'} style={{animationDelay: `.${i}s`}}>
                                        <Link href={'/' + (col == 'Home' ? '' : col)}>
                                            <a>
                                                <div>
                                                    <img src={`./static/headerIcons/${col}.png`}/>
                                                </div>
                                                <p> {col} </p>
                                            </a>
                                        </Link>
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
    position:absolute;
    top: 0;
    left: 0;
    width: calc(100% - 20px);
    height: 40px;
    padding: 10px;
    z-index: 1;
}

div.header.hasBanner {
    top: 289px;
}

@media (max-width: 600px) {
    div.header.hasBanner {
        top: 200px;
    }
}

div.line {
    position:absolute;
    top:50%;
    transform: translateY(-50%);
    left:0;
    width:100%;
    height:40%;
    background:${css.sky};
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
        strokeDasharray : 13; 
    }
}

svg.blick circle {
    stroke-width: 0;
    r: 6;
    stroke : ${css.grey};
    strokeDasharray : 13;
}

div.menuIcon:hover svg.blick circle {
    animation: blinck 1s ease;
}

div.pages {
   display: none;
}

div.pages.show {
    display: block;
}

ul {
    list-style-type: none;
    margin : 0;
    padding: 0;
    padding-top: 5px;
    margin-left: 5px;
}

li {
    opacity: 0.9;
    margin-bottom: 4px;
    transform: scale(1);
    box-shadow: 1px 1px 1px rgba(0,0,0,0);
    border-radius: 25px;
    
    transition: all .2s ease;
}

li:hover {
    opacity: 1;
    box-shadow: 1px 1px 1px rgba(0,0,0,.3);
    transform: scale(1.01);
}


@media (max-width: 600px) {
    li {
        opacity: 1;
        box-shadow: 1px 1px 1px rgba(0,0,0,0);
    }
    
    div.page.show li {
        box-shadow: 1px 1px 1px rgba(0,0,0,.3);
    }
}

div.page {
    background: ${css.sky};
    border-radius: 25px;
    opacity: 0;
}

@keyframes show {
    0% {
        box-shadow: 1px 1px 1px rgba(0,0,0,0);
        opacity: 0;
        transform: translateY(15px);
    }
    
    100% {
        box-shadow: 1px 1px 1px rgba(0,0,0,.3);
        opacity: 1;
        transform: translateY(0px);
    }
}

@keyframes hide {
    0% {
        box-shadow: 1px 1px 1px rgba(0,0,0,.3);
        opacity: 1;
        transform: translateY(0px);
    }
    
    100% {
        box-shadow: 1px 1px 1px rgba(0,0,0,0);
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
    text-decoration: none;
    color: ${css.grey}
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
    cursor: default;
}

a div {
    height: 35px;
    width: 35px;
    position: relative;
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
    stroke-linecap : round;
    transition: all .2s ease;

    d : path("M10,10 L70,50 L10,90 L10,10"); 
}

@keyframes expande {
    0% {
        d : path("M10,10 L70,50 L10,90 L10,10"); 
    }

    50% {
        d : path("M10,10 L80,10 L10,10 L10,10");
    }

    100% {
        fill: ${css.grey};
        d : path("M10,20 L90,20 L50,80 L10,20");
    }
}

@keyframes dexpande {
    0% {
        fill: ${css.grey};
        d : path("M10,20 L90,20 L50,80 L10,20");
    }
    
    50% {
        d : path("M10,10 L10,80 L10,10 L10,10");
    }
    
    100% {
        fill: none;
        d : path("M10,10 L70,50 L10,90 L10,10"); 
    }
}

svg.expande.show path {
    animation: expande .5s ease forwards;
}

svg.expande.hide path {
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