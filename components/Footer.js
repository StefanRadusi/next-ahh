import css from '../css/utils';

export default () => (
    <div className='footer'>
        <div className='footerContainer'>
            <div className='siteName'>
                <ul> Site Map
                    <li><a>Homea</a></li>
                    <li><a>Photo-video</a></li>
                    <li><a>Print</a></li>
                    <li><a>Personalizari</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <img src='./static/balance.png' />
        </div>
        <style jsx>{
`
div.footer {
    background: ${css.grey};
    color: ${css.neutral};
    padding: 10px;
}

div.footerContainer {
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: auto;
    position: relative;
}

ul {
    font-size: 18px;
    list-style-type: none;
    padding: 0;
}

li {
    font-size: 15px;
    margin-left: 5px;
}

img {
    position: absolute;
    right: 10px;
    bottom: 10px;
    height: 80px;
}

a {
    cursor: default;
}

a:hover {
    text-decoration: underline;
    color: ${css.sky}
}

@media (max-width: 400px) {
    ul {
        font-size:15px;
    }
    
    li {
        font-size:10px;
    }
    
    img {
        height: 60px;
    }
}


`
        }</style>
    </div>
);