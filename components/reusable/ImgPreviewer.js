import {Component} from 'react';
import css from '../../css/utils';
import Loading from './Loading';
import { setTimeout } from 'timers';

class ImgPreviewer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading : false,
            showPic : false,
            currentIndex : 0,
            imgList : [],
            previewShow : false,
            display : false
        };
    }
    
    nextPicLeft() {
        if(this.state.currentIndex > 0) {
            this.hidePic();
            setTimeout(() => {
                this.state.currentIndex--;
                this.setState(this.state);
            }, 500);
        }
    }
    
    nextPicRight() {
        if(this.state.currentIndex < this.state.imgList.length - 1) {
            this.hidePic();
            setTimeout(() => {
                this.state.currentIndex++;
                this.setState(this.state);
            }, 500);
        }
    }

    showPic(event) {
        // console.log(event);
        this.state.loading = false;
        this.state.showPic = true;
        this.setState(this.state);
    }
    
    hidePic() {
        this.state.loading = true;
        this.state.showPic = false;
        // console.log(this.state);
        this.setState(this.state);

        setTimeout(() => {
            // if(this.state.loading) {
            //     this.showPic();
            // }
        }, 6000);
    }   

    closeImgPreviewer() {
        this.state.previewShow = false;
        this.setState(this.state);
        this.props.hidePreviewer();
    }

    displayNone(event) {
        if((this.state.previewShow == false) && event.target.classList.contains('previewerContainer')) {
            this.state.display = false;
            this.setState(this.state);
        }
    }

    showImgPreviewer(imgList, index) {
        console.log('open previewer');
        this.state.display = true;
        this.setState(this.state);
        if(this.state.imgList[this.state.currentIndex] != imgList[index]) {
            this.hidePic();
        }
        setTimeout(() => {
            this.state.currentIndex = index;
            this.state.imgList = imgList;
            this.state.previewShow = true;
            this.setState(this.state);
        }, 100)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.showPreviewer == true) {
            this.showImgPreviewer(nextProps.currentImgList, nextProps.currentImgPreviewIndex)
        }
    }

    render() {
        let classContainer = 'previewerContainer';
        if(this.state.previewShow) classContainer += ' showContainer ';
        if(this.state.display) classContainer += ' display ';

        return (
            <div className={classContainer} onTransitionEnd={this.displayNone.bind(this)}>
                <div className='actions'>
                    <div className='imgContainer'>
                        <img
                            className={this.state.showPic && 'show'}
                            src={this.state.imgList[this.state.currentIndex]}
                            // onLoadStart={this.hidePic.bind(this)} 
                            onLoad={this.showPic.bind(this)} 
                        />
                        
                        <Loading show={this.state.loading} invert/>
                    </div>
                    <div className='navigate left' onClick={this.nextPicLeft.bind(this)}>
                        <svg viewBox="0 0 500 500">
                            <polygon id="leftPrev" points="450,100 50,250 450,400">
                                <animate begin="leftPrev.click" attributeName="points" dur="200ms" to="180,100 0,250 180,400" id="firstleft"/>
                                <animate begin="firstleft.begin + .06s" attributeName="points" dur="200ms" to="450,100 50,250 450,400" />
                            </polygon>
                        </svg>
                    </div>
                    <div className='navigate right' onClick={this.nextPicRight.bind(this)}>
                        <svg viewBox="0 0 500 500">
                            <polygon id="rightPrev" points="50,100 450,250 50,400">
                                <animate begin="rightPrev.click" attributeName="points" dur="200ms" to="320,100 480,250 320,400" id="firstright"/>
                                <animate begin="firstleft.begin + .06s" attributeName="points" dur="200ms" to="320,100 450,250 320,400" />
                            </polygon>
                        </svg>
                    </div>
                    <div className='closeButton' onClick={this.closeImgPreviewer.bind(this)}>
                        <img src='./static/delete.png' />
                    </div>
                </div>
<style jsx> {
`div.previewerContainer {
    background: rgba(0,0,0,0.8);
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    opacity: 0;
    z-index: 1;
    display:none;

    transition: opacity .5s ease;
}

div.previewerContainer.showContainer {
    opacity: 1;
}

div.previewerContainer.display {
    display: block;
}

div.actions {
    height: 90%;
    width: 90%;
    ${css.center};
}


div.imgContainer {
    width: calc(100% - 50px);
    height: calc(100% - 50px);
    padding: 25px;
    position: relative;
}

div.imgContainer img {
    ${css.center};
    max-width: calc(100% - 100px);
    max-height: calc(100% - 100px);
    height: auto;
    width: auto;
    border-radius: 4px;
    opacity:0;

    transition: opacity 0.5s ease;
}

div.imgContainer img.show {
    opacity: 1;
}

@media (max-width: 700px) {
    div.actions {
        height: 98%;
        width: 98%;
    }
    
    div.imgContainer img {
        max-width: calc(100% - 50px);
        max-height: calc(100% - 50px);
    }

}
div.navigate {
    height: 100%;
    width: 25px;
    position: absolute;
    top:0;
    left:0;
    // background: ${css.neutral};
    // box-shadow: 0px -4px 4px 2px rgba(0,0,0,.3);
}

div.navigate.right {
    left: unset;
    right:0;
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
    stroke: ${css.neutral};
    strokeWidth: 40;
    strokeLinecap: round;
    strokeLinejoin: round;
    
    transition: all 1s ease;
}

polygon:hover {
    fill: ${css.neutral};
}

div.closeButton {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
}

div.closeButton img {
    height: 10px;
    filter: invert(100%);

    transition: filter 0.3s ease;
}

div.closeButton img:hover {
    filter: invert(80%);
}

`}</style>
            </div>
        )
    }
}

export default ImgPreviewer;