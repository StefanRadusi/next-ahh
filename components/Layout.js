import Header from './Header';
import Head from 'next/head';
import css from '../css/utils';

const Layout = (props) => (
  <div className='layout'>
      <Head>
        <title>Hai Hui</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href="https://fonts.googleapis.com/css?family=News+Cycle" rel="stylesheet"/>
      </Head>

      <Header />
      {props.children}

    <style jsx global>
{`
div.layout {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 10px;
    font-family: News Cycle, Arial;
    font-weight: 300;
    background: ${css.neutral}
}

div.basicPage {
    margin-top: 50px;
    padding: 10px;
}
`}
    </style>
  </div>
)

export default Layout;