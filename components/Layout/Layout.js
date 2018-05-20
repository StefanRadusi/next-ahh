import React, {Component} from 'react';
import style from './Layout.style';
import globalStyle from '../../css/Global.style';
import Menu from '../Menu/Menu';
import MenuButton from './MenuButton/MenuButon';
import Head from 'next/head'
import { HomeIcon, PhotoIcon } from '../Menu/MenuIcons';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
           showMenu : false
        };
    }

    showMenuAction() {
        this.setState({showMenu : true });
    }

    hideMenuAction() {
        console.log('insss');
        this.setState({showMenu : false });
    }

    render() {
        return (
            <div className='layout'>
                <Head>
                    <title>AtelierulHaiHui</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                </Head>
                <Menu
                    pages={[
                        {
                            icon : <HomeIcon />,
                            text: 'Home',
                            link: '/'
                        },
                        {
                            icon : <PhotoIcon />,
                            text: 'Photo Studio',
                            link: 'photostudio'
                        },
                    ]} 
                    showMenu={this.state.showMenu}
                    hideMenuAction={this.hideMenuAction.bind(this)}
                />
                <div className={`container ${this.state.showMenu && 'showMenu'}`}>
                    <MenuButton 
                        showMenu={this.state.showMenu}
                        showMenuAction={this.showMenuAction.bind(this)}
                        hideMenuAction={this.hideMenuAction.bind(this)}
                    />
                    {
                        this.props.children
                    }
                </div>
                <style jsx global>{globalStyle}</style>
                <style jsx>{style}</style>
            </div>
        )
    }
}

export default Layout;