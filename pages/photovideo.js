import {Component} from 'react';
import Layout from '../components/Layout';
// import css from '../css/utils';
import Banner from '../components/reusable/Banner';
import svgAggregator from '../components/svg/svgAgregator';
import customFetch from '../components/reusable/CustomFetch';

class PhotoVideo extends Component { 
  constructor() {
    super();

  }

  componentDidMount() {
    customFetch.fetch('GET', '')
    .then(response => console.log(response));
  }

  render() {

    return (
      <div className='photoVideo basicPage'>
        <div className='nunti'>
          <Banner 
            text="Nunti si evenimente conexe"
            svg={svgAggregator.nunti}
          />
        </div>
    
        <style jsx>{`
    
        
        `}</style>
      </div>
    
    )
  }

}

export default () => (<Layout><PhotoVideo/></Layout>);