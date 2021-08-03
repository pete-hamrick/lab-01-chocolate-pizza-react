import React, { Component } from 'react';

import vanImg from './assets/van-pic.png'
class Author extends Component {
    render() { 
        return ( 
            <div className='author-section'>
                <img alt='Vanessa' src={vanImg}></img>
                <h3>
                    Vanessa Stevenson
                </h3>
                <p>
                    Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
                </p>
                <p className='share-button'>
                    SHARE RECIPE
                </p>
            </div>
        );
    }
}
 
export default Author;