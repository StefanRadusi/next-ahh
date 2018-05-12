import React, {Component} from 'react';
import style from './Layout.style';
import globalStyle from '../../css/Global.style';
import Menu from '../Menu/Menu';
import MenuButton from './MenuButton/MenuButon';
import Head from 'next/head'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
           showMenu : true
        };
    }

    showMenuAction() {
        this.setState({showMenu : true });
    }

    hideMenuAction() {
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
                    pages={{
                        Home : 'Home',
                        Photo : 'Photo Studio',
                        Video : 'Poze/Filmari Evenimente',
                        Print : 'Print Poze/Canvas',
                        Custom : 'Personalizari Obiecte',
                        Contact : 'Contact'
                    }} 
                    showMenu={this.state.showMenu}
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