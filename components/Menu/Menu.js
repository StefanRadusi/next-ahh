import React, {Component} from 'react';
import style from './Menu.style';
import * as MenuIcons from './MenuIcons';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    renderIcon(Icon) {
        return Icon && <Icon />
    }

    render() {
        console.log(MenuIcons);
        return (
            <div className='menu'>
                {
                  Object.keys(this.props.pages).map(page => (
                    <div className='page' key={page}>
                        { this.renderIcon(MenuIcons[page]) }
                        <p> {this.props.pages[page]} </p>
                    </div>
                  ))
                }
                <style jsx>{style}</style>
            </div>
        )
    }
}

export default Menu;