import {Component} from 'react';
import css from '../../css/utils';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toBack : !props.show
        }
    }

    toBack() {
        // console.log('transistion');
        this.state.toBack = true;
        this.setState(this.state);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.show == true) {
            this.state.toBack = false;
        }
    }

    render()  {
        let className = 'loading';
        if(this.props.invert) className = className + ' invert ';
        if(this.props.show) className = className + ' show '; 
        if(this.state.toBack) className = className + ' toBack '; 

        // console.log(className);
        return (
            <div className={className} onTransitionEnd={this.toBack.bind(this)} >
                <svg viewBox="0 0 500 500">
                    <g>
                        <path fill="none" stroke="#000000" strokeWidth="24" strokmiterlimit="10" d="M472.598,211.554l6.611-2.807l-2.807-6.611
                            L443.658,125l-2.807-6.612l-6.612,2.807l-52.49,22.283c-7.571-9.254-16.119-17.688-25.499-25.163l21.329-52.796l2.688-6.657
                            l-6.657-2.691l-77.698-31.388l-6.66-2.694l-2.688,6.662l-21.408,52.989c-11.3-1.024-22.646-0.925-33.861,0.298l-21.946-51.696
                            l-2.807-6.612l-6.612,2.807L122.795,59.28l-6.612,2.807l2.807,6.612l21.946,51.698c-8.232,6.855-15.813,14.488-22.627,22.772
                            l-51.895-20.964l-6.66-2.693l-2.689,6.662L25.675,203.87l-2.69,6.657l6.658,2.691l50.768,20.51
                            c-1.248,11.711-1.276,23.475-0.084,35.104l-50.923,21.616l-6.612,2.807l2.807,6.612l32.745,77.137l2.806,6.609l6.612-2.807
                            l50.286-21.347c7.939,9.703,16.952,18.502,26.887,26.25l-20.512,50.772l-2.689,6.66l6.657,2.688l77.699,31.391l6.66,2.691
                            l2.688-6.66l20.964-51.891c11.496,0.928,23.082,0.669,34.571-0.771l21.679,51.069l2.807,6.612l6.611-2.807l77.137-32.745
                            l6.611-2.807l-2.807-6.612l-22.234-52.376c7.934-6.795,15.246-14.347,21.825-22.533l52.984,21.403l6.659,2.692l2.688-6.661
                            l31.391-77.698l2.688-6.659l-6.657-2.689l-52.796-21.328c1.064-11.136,1.031-22.312-0.096-33.347l53.132-22.554L472.598,211.554z
                            M343.563,211.708c21.925,51.647-2.255,111.501-53.901,133.425c-51.648,21.926-111.502-2.256-133.427-53.903
                            c-21.925-51.647,2.255-111.5,53.903-133.426C261.784,135.88,321.638,160.061,343.563,211.708z"/>
                    </g>
                </svg>
        <style jsx>{`
        div {
            position: absolute;
            width: 100%;
            height: 100%;
            top:0;
            left:0;
            background: ${css.neutral_fade};
        }
        
        div.invert {
            background: transparent;
        }

        div.invert path {
            stroke: ${css.neutral};
        }

        svg {
            width: 35px;
            height: 35px;
            ${css.center};
        }

        path {
            stroke: ${css.red};
            strokeWidth: 30px;
            stroke-dasharray: 2100;
            stroke-dashoffset: 0;
            transform: rotate(360deg);
            transform-origin: center;
            
        }

        @keyframes loading {
            0% {
                stroke-dashoffset: 2100;
                transform: rotate(0deg);
            }
            
            100% {
                transform: rotate(360deg);
                stroke-dashoffset: 0;
            }
        }

        div.loading {
            opacity: 0;
            transition: opacity 1s ease;
            z-index: 1;
        }

        div.loading.show {
            opacity: 1;
        }

        div.loading.toBack {
            z-index: -1;
        }

        div.loading.show path {
            animation: loading 2s ease alternate infinite;
        }
        `}</style>
            </div>
        )
    }
}

export default Loading;