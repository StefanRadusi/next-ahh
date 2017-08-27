import Link from 'next/link';
import {Component} from 'react';

class Header extends Component {
    headerStructure = [
        {
            name : 'home',
            url : '/'
        },
        {
            name : 'photo-video',
            url : '/photovideo'
        }
    ]

    render() {
        return (
            <div className='header'>
                {
                    this.headerStructure.map(page => (
                        <div key={page.name} className='page'>
                            <p> { page.name } </p>
                            <img src={'./static/' + page.name + '.png'} />
                        </div>    
                    ))
                }
                <style jsx>{`
                    div.header {
                        position:fixed;
                        top: 2%;
                        left: 2%;
                    }
                `}</style>
            </div>
        )
    }
}

export default Header;