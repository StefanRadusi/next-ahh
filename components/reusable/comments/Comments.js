import {Component} from 'react';
import css from '../../../css/utils';
import cssJsxFunc from 'styled-jsx/css';
import Comment from './Comment';
import AddButton from '../buttons/AddButton';
import CommentEditBox from './CommentEditBox';


const commentsStyle = cssJsxFunc`
div.commentsContainer {
    width: calc(100% - 10px);
    padding: 5px;
}

p.title {
    font-size: 20px;
    margin: 0;
    padding: 5px;
    border-radius: 4px;
}

div.comments {
    width: 100%;
}

div.header {
    display: flex;
    align-items: center;
    background: ${css.sky}; 
}

div.header p {
    flex: 1;
}

`;

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: true,

            comments : [
                {
                    name: 'Stef',
                    rating: 3,
                    date: '2018-01-02',
                    content: 'Super, oameni de treaba excelenta organizare'
                }
            ]
        }
    }

    render() {
        return (
            <div className='commentsContainer'>
                <div className='header'>
                    <p className='title'> {`Opinii ${this.props.title}`} </p>
                    <AddButton text='Add comment'/>
                </div>
                <CommentEditBox />
                <div className='comments'>
                    {
                        this.state.comments.map(
                            (comment, index) => (
                                <Comment
                                    key={index}
                                    {...comment}
                                />
                            ))
                    }
                </div>
                <style jsx>{commentsStyle} </style>
            </div> 
        )
    }
}



export default Comments;
