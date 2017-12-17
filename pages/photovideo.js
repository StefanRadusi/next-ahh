import {Component} from 'react';
import Layout from '../components/Layout';
// import css from '../css/utils';
import Banner from '../components/reusable/Banner';
import svgAgregator from '../components/svg/svgAgregator';


class PhotoVideo extends Component { 
  constructor() {
    super();

  }

  render() {

    return (
      <div className='photoVideo basicPage'>
        <div className='nunti'>
          <Banner 
            text="Nunti si evenimente conexe"
            svg={svgAgregator.nunti}
          />
        </div>
    
        <style jsx>{`
    
        
        `}</style>
      </div>
    
    )
  }

}

export default () => (<Layout><PhotoVideo/></Layout>);