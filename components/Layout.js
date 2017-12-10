import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import css from '../css/utils';

import HaiHuiLogo from './svg/HaiHuiLogo.js';

const HomeBanner = () => (
    <div className='homeBanner'>
        <div className='svgBackGroundRadient'></div>
        <div className='svgContainer'>
            <HaiHuiLogo />
        </div>
        <style jsx>{
`
div.homeBanner {
    position:relative;
    height: 289px;
    width: 100%;
    background-image: url("./static/homeBanner.png");
    // background-size: 1350px 275px;    
}

div.svgContainer {    
    width:500px;
    height: 300px;
    margin: auto;
}

@keyframes scaleGradientDiv {
    0% {
        transform:  translateX(-50%) translateY(-50%) scale(0);
    }

    100% {
        transform:  translateX(-50%) translateY(-50%) scale(1);
    }
}

div.svgBackGroundRadient {
    position: absolute;
    top:50%;
    left:50%;
    transform:  translateX(-50%) translateY(-50%) scale(0);
    width:300px;
    height: 300px;
    background: radial-gradient(ellipse at center, rgba(239,239,239,1) 20%, rgba(239,239,239,0) 80%);
    animation: scaleGradientDiv 2s 2s ease forwards;
}

@media (max-width: 600px) {
    div.homeBanner {
        background-size: 1000px 200px;
        height: 200px;
    }

    div.svgContainer {
        width:100%;
        height: 200px;
    }
}
`
        }</style>
    </div>
);

const Layout = (props) => (
  <div className='layout'>
    {
        props.homePage && <HomeBanner />
    }
    <Head>
        <title>Hai Hui</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href="https://fonts.googleapis.com/css?family=News+Cycle" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Amatic+SC:700" rel="stylesheet"/>
    </Head>
    <Header homePage = {props.homePage}/>
    {props.children}
    <Footer />

    <style jsx global>
{`

::-webkit-scrollbar {
    width: 10px;
    background: ${css.neutral}; 
}

::-webkit-scrollbar-track {
    border-radius: 8px;
    background: ${css.sky}; 
}

::-webkit-scrollbar-thumb {
    border-radius: 6px;
    border: 2px solid ${css.sky}; 
    background: ${css.grey}; 
}


div.layout {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    font-size: 10px;
    font-family: News Cycle, Arial;
    font-weight: 300;
    color: ${css.grey}
    background: ${css.neutral};
}

div.basicPage {
    margin: auto;
    margin-top: 50px;
    padding: 10px;
    width: calc(100% - 20px);
    max-width: 980px;
}
`}
    </style>
  </div>
)

export default Layout;