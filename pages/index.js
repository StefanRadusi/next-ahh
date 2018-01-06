import Layout from '../components/Layout';
import Head from 'next/head'
import Banner from '../components/reusable/Banner';
import svgAgregator from '../components/svg/svgAgregator';
import Link from 'next/link';


const Home = () => (
  <div className='home basicPage'>
    <Link href='/photovideo'>
      <a>
        <Banner
          text="Poze si filmari evenimente"
          svg={svgAgregator.events}
        />
      </a>
    </Link>
    <Banner
      text="Print poze si cavans"
      svg={svgAgregator.print}
    />
    <Banner
      text="Personalizari tricouri, cani si altele"
      svg={svgAgregator.personalizari}
    />
    <style jsx>{`
    a {
      text-decoration: none;
    }
    `}</style>
  </div>
) 

export default () => (
  <Layout homePage>  
    <Home/>
  </Layout>
);