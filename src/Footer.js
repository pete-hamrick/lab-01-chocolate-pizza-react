import React, { Component } from 'react';

import smallLogo from './assets/small-logo.png'

class Footer extends Component {
    render() { 
        return ( 
            <footer>
                <img alt='small-logo' src={smallLogo}></img>
                <p>
                    Delicious @copy 2013 * All Rights Reserved.
                </p>
                <p>
                    Proudly published with Ghost.
                </p>
            </footer>
        );
    }
}
 
export default Footer;