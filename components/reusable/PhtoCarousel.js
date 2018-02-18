import {Component} from 'react';
import customFetch from './CustomFetch';
import css from '../../css/utils';
import Loading from './Loading';

class PhotoCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos : [],
            loading : false,
            nrOfImgLoaded: 0,
            maxNrOfImg: 10
        }
    }

    componentDidMount() {
        this.state.loading = true;
        this.setState(this.state);
        // console.log('start loading');
        customFetch.fetch('GET', 'fromCloudinary', { folder : this.props.folder })
        .then(response => {
            if(response && response.resources) {
                this.state.photos = response.resources;
                this.setState(this.state);
            }
        });
    }

    moveScrollLeft(event) {
        this.scrollByValue(event.currentTarget.parentNode.querySelector('div.imgContainer'), -100);
    }

    moveScrollRight(event) {
        this.scrollByValue(event.currentTarget.parentNode.querySelector('div.imgContainer'), 100);
    }

    scrollByValue(element, val) {
        element.scrollBy({ 
            top: 0,
            left: val, 
            behavior: 'smooth' 
        });
    }

    imgLoad(event) {
        this.state.nrOfImgLoaded++;
        if(this.state.maxNrOfImg == this.state.nrOfImgLoaded) {
            console.log('done loading');
            this.state.loading = false;
            this.setState(this.state);
        }
    }

    render() {
        return (
            <div className='previewPhotos'>
                <div className='imgContainer'>
                {
                    this.state.photos.slice(0, this.state.maxNrOfImg).map((photo, index) => {
                    const url = photo.secure_url;
                    const insertStringIndex = url.indexOf('upload') + 6;
                    const insertString = '/c_thumb,dl_0,h_100';
                    
                    return (
                        <img id={index} key={index} src=
                            {`${
                                url.substring(0,insertStringIndex)
                                + insertString
                                + url.substring(insertStringIndex)
                            }`}                      
                            onLoad={this.imgLoad.bind(this)}
                            onClick={ event => { 
                                this.props.imgPreview(
                                    event.currentTarget.id, 
                                    this.state.photos.slice(0, this.state.maxNrOfImg).map(photo => photo.secure_url)
                                ) 
                            }}
                        
                        />
                    )
                    })
                }
                </div>
                <div className='navigate left' onClick={this.moveScrollLeft.bind(this)}>
                    <svg viewBox="0 0 500 500">
                        <polygon id="left" points="450,100 50,250 450,400">
                            <animate begin="left.click" attributeName="points" dur="200ms" to="180,100 0,250 180,400" id="firstleft"/>
                            <animate begin="firstleft.begin + .06s" attributeName="points" dur="200ms" to="450,100 50,250 450,400" />
                        </polygon>
                    </svg>
                </div>
                <div className='navigate right' onClick={this.moveScrollRight.bind(this)}>
                    <svg viewBox="0 0 500 500">
                        <polygon id="right" points="50,100 450,250 50,400">
                            <animate begin="right.click" attributeName="points" dur="200ms" to="320,100 480,250 320,400" id="firstright"/>
                            <animate begin="firstleft.begin + .06s" attributeName="points" dur="200ms" to="320,100 450,250 320,400" />
                        </polygon>
                    </svg>
                </div>
                <Loading 
                    show = {this.state.loading}
                />
                <style jsx>{`
                    div.previewPhotos {
                        height: 120px;
                        position: relative;
                        overflow: hidden;
                        // padding: 10px;
                    }
                    div.navigate {
                        height: 100%;
                        width: 25px;
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        background: ${css.neutral};
                        box-shadow: 4px 0px 4px -4px rgba(0,0,0,.6);
                    }
                    
                    div.navigate.right {
                        left: unset;
                        box-shadow: -4px 0px 4px -4px rgba(0,0,0,.6);
                        right: 0px;
                    }
                    
                    svg {
                        height: 100%;
                        width: 20px;
                    }

                    div.navigate.right svg {
                        float: right;
                    }
                    
                    polygon {
                        fill:transparent;
                        stroke: ${css.red};
                        stroke-width: 40;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        
                        trasnsition: all 1s ease;
                    }

                    polygon:hover {
                        fill: ${css.red};
                    }

                    div.imgContainer {
                        width: calc(100% - 30px);
                        height: calc(100% - 24px);
                       
                        padding: 10px;
                        
                        margin-left: 5px;
                        margin-right: 5px;
                        display: flex;
                        align-items: center;
                        overflow: auto;
                        border-top: 2px solid ${css.sky};
                        border-bottom: 2px solid ${css.sky};
                    }

                    div.imgContainer::-webkit-scrollbar {  
                        display: none; 
                    }

                    img {
                        margin-left : 5px;
                        margin-right : 5px;
                        border-radius: 2px;
                        ${css.boxShadowNone};
                        transform: scale(1);
                        cursor: pointer;
                      
                        transition: all 0.3s ease;
                    }
                    
                    img:hover {
                        margin-left : 10px;
                        margin-right : 10px;
                        transform: scale(1.1);
                        ${css.boxShadow};
                    }

        
                `}</style>
            </div>    
        )
    }
}

export default PhotoCarousel;