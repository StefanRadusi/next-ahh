import React, {Component} from 'react';
import style from './Menu.style';
import * as MenuIcons from './MenuIcons';

import Link from 'next/link';

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
        return (
            <div className='menu'>
                {
                  this.props.pages.map(page => (
                    <div onClick={this.props.hideMenuAction} key={page.link}>
                        <Link href={page.link}>
                            <div className='page'  >
                                { page.icon }
                                <p>{ page.text }</p>
                            </div>
                        </Link>
                    </div>
                  ))
                }
                <style jsx>{style}</style>
            </div>
        )
    }
}

export default Menu;