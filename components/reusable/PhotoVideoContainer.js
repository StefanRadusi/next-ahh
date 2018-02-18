import Banner from './Banner';
import PhotoCarousel from './PhtoCarousel';

const PhotoVideoContainer = (props) => {
    return (
        <div className='photoVideoContainer'>
            <Banner 
                text={props.text}
                svg={props.svg}
            />
            <PhotoCarousel 
                folder={props.imgFolder}
                imgPreview={props.showPreviewerFunc} 
            />
            {props.children}
        </div>
    )
}

export default PhotoVideoContainer;