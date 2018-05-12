import Layout from '../components/Layout/Layout';
import Head from 'next/head'
import Banner from '../components/reusable/Banner';
import svgAgregator from '../components/svg/svgAgregator';
import Link from 'next/link';

const Home = () => (
  <div className='home basicPage'>
  </div>
) 

export default () => (
  <Layout homePage>  
    <Home/>
  </Layout>
);