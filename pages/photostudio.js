import Layout from '../components/Layout/Layout';
import { baisicBageStyle } from '../css/Global.style';
import utilsStyle from '../css/utils'; 

const PhotoStudio = () => (
    <div className='photoStudio basicPage'>
      <p> Pagina photo studio in lucru ! </p>
      <style jsx>{ baisicBageStyle }</style>
      <style jsx> {
          `
          p {
            ${utilsStyle.center};
          }
          `
      } </style>
    </div>
  ) 
  
  export default PhotoStudio;