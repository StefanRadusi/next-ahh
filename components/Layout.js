import Header from './Header';

const Layout = (props) => (
  <div className='layout'>
    <div className='container'>
      <Header />
      {props.children}
    </div>
    <style jsx global>{ `
      p {
        margin: 0;
      }

      div.layout {
          outline: 1px solid lightgrey;
          display: flex;
          justify-content: center;
      }

      div.container {
        position: relative;
        outline: 1px solid lightgrey;
        width: 100%;
        max-width: 1000px;

      }

      div.basicPageStyle {
        outline: 1px solid lightgrey;
        height: 1000px;
      }
    `}</style>
  </div>
)

export default Layout;