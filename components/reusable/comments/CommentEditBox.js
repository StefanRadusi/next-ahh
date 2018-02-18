import Rating from './Rating';
import cssFunc from 'styled-jsx/css';

const style = cssFunc`

`;


export default (props) => (
    <div className='commentEditBox'>
        <div className='name'>
            <p>Nume</p>
            <input id='name'/>
        </div>
        <div className='name'>
            <p>Stele</p>
            <Rating/>
        </div>
        <div className='name'>
            <p>Comment</p>
            <textarea id='content' />
        </div>
        <style jsx>{style}</style>
    </div>
);

