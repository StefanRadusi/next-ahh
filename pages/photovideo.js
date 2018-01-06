import {Component} from 'react';
import Layout from '../components/Layout';
// import css from '../css/utils';
import Banner from '../components/reusable/Banner';
import svgAggregator from '../components/svg/svgAgregator';
import PhotoCarousel from '../components/reusable/PhtoCarousel';


class PhotoVideo extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      photos : []
    };
  }

  

  render() {

    return (
      <div className='photoVideo basicPage'>
        <div className='nunti'>
          <Banner 
            text="Nunti si evenimente conexe"
            svg={svgAggregator.nunti}
          />
          <PhotoCarousel 
            folder='evenimente/nunti'
            imgPreview={this.props.showPreviewerFunc} 
          />
          
        </div>
    
        <style jsx>{`
          
        
        `}</style>
      </div>
    
    )
  }

}

export default () => (<Layout><PhotoVideo/></Layout>);