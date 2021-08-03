import React, { Component } from 'react';

import logo from './assets/logo.png'
import fbIcon from './assets/fb-icon.png'
import twitIcon from './assets/twit-icon.png'
import gpIcon from './assets/gp-icon.png'
import instaIcon from './assets/insta-icon.png'
import flicIcon from './assets/flic-icon.png'
import pintIcon from './assets/pint-icon.png'
import rssIcon from './assets/rss-icon.png'
import mailIcon from './assets/mail-icon.png'

class Header extends Component {
    render() { 
        return ( 
            <header>
                <img src={logo} alt='logo'></img>
                <h2>
                    Delicious
                </h2>
                <h5>
                    The Best Food Blog On The Web
                </h5>
                <div className= 'button-list'>
                    <img src={fbIcon} alt='fb-icon'></img>
                    <img src={twitIcon} alt='twit-icon'></img>
                    <img src={gpIcon} alt='gp-icon'></img>
                    <img src={instaIcon} alt='insta-icon'></img>
                    <img src={flicIcon} alt='flic-icon'></img>
                    <img src={pintIcon} alt='pint-icon'></img>
                    <img src={rssIcon} alt='rss-icon'></img>
                    <img src={mailIcon} alt='mail-icon'></img>
                </div>
            </header>
        );
    }
}
 
export default Header;