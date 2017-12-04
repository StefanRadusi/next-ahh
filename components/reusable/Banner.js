import {Component} from 'react';
import css from '../../css/utils';

class Banner extends Component {
    render() {
        return (
            <div className='animatedTitleSection'>
               <h3>{this.props.text}</h3>
               {this.props.svg()}
            </div>
        )
    }
}

export default Banner;