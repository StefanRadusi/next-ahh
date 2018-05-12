import {Component} from 'react';
import Layout from '../components/Layout';
import svgAggregator from '../components/svg/svgAgregator';
import PhotoVideoContainer from '../components/reusable/PhotoVideoContainer';
import Nunti from '../components/oferte/Nunti';
import Comments from '../components/reusable/comments/Comments';


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
          <PhotoVideoContainer
            text='Nunti si evenimente conexe'
            svg={svgAggregator.nunti}
            imgFolder={'evenimente/nunti'}
            showPreviewerFunc={this.props.showPreviewerFunc}
          >
            <Nunti/>
            <Comments
              label='nunti' 
              title='nunti si evenimente conexe'
            />
          </PhotoVideoContainer>
        </div>
    
      </div>
    
    )
  }

}

export default () => (<Layout><PhotoVideo/></Layout>);