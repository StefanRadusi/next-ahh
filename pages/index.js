import Layout from '../components/Layout';
import Head from 'next/head'
import Banner from '../components/reusable/Banner';
import svgAgregator from '../components/svg/svgAgregator';


const Home = () => (
  <div className='basicPage'>
    <Banner
      text="Poze si filmari evenimente"
      svg={svgAgregator.events}
    />
  </div>
) 

export default () => (
  <Layout homePage>  
    <Home/>
  </Layout>
);