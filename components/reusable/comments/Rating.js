import {Component} from 'react';
import css from '../../../css/utils';
import cssJsxFunc from 'styled-jsx/css';

const ratingStyle = cssJsxFunc`
    div.rating {
        display: flex;
    }

    svg {
        height: 15px;
        width: 15px;
    }

    polygon {
        fill: none;
        stroke-width: 20;
        stroke: grey;
    }

    polygon.fill {
        fill: gold;
    }

`;

class Rating extends Component {

    render() {
        return (
            <div className='rating'>
                {
                  [...new Array(5)].map((e, index) => (
                        <svg
                            key={index}
                            id={index} 
                            viewBox="0 0 500 500"
                        >
                            <polygon
                                className={(this.props.rating > index) && 'fill'} 
                                points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
                            />
                        </svg>
                  ))   
                }
                <style jsx>{ratingStyle}</style>
            </div>
        )
    }
};

export default Rating;