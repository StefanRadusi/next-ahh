import Layout from '../components/Layout';
import Head from 'next/head'
import Banner from '../components/reusable/Banner';
import svgAgregator from '../components/svg/svgAgregator';


const Home = () => (
  <div className='home basicPage'>
    <Banner
      text="Poze si filmari evenimente"
      svg={svgAgregator.events}
    />
    <Banner
      text="Print poze si cavans"
      svg={svgAgregator.print}
    />
    <Banner
      text="Personalizari tricouri, cani si altele"
      svg={svgAgregator.personalizari}
    />
  </div>
) 

export default () => (
  <Layout homePage>  
    <Home/>
  </Layout>
);