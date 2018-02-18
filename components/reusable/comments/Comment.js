import css from '../../../css/utils';
import cssJsxFunc from 'styled-jsx/css';
import Rating from './Rating';

const commentStyle = cssJsxFunc`
div.comment {
    width: calc(100% - 4px);
    border: 2px solid ${css.sky};
    margin-top: 5px;
    border-radius: 4px;
}

div.header {
    width: 100%;
    display: flex;
    align-items: center;
}

div.details {
    padding: 5px;
}

div.details p {
    font-size: 18px;
    font-weight: bold;
}

p {
    font-size: 15px;
    margin: 0;
}

div.line {
    flex: 1;
    height: 3px;
    background: ${css.sky};
    margin:5px;
    border-radius: 4px;
}

p.date {
    padding: 5px;
    padding-right: 10px;
}

div.commentContent {
    padding: 10px;
}
`;

const Comment = (props) => (
    <div className='comment'>
        <div className='header'>
            <div className='details'>
              <p> {props.name} </p>
              <Rating 
                rating={props.rating}
              />
            </div>
            <div className='line' />
          
            <p className='date'> {props.date} </p>
        </div>
        <div className='commentContent'>
            <p> {props.content} </p>
        </div>
            
        <style jsx>{commentStyle}</style>
    </div>
);

export default Comment;