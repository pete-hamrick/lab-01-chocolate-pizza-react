import React, { Component } from 'react';

import vanImg from './assets/van-pic.png'
class Author extends Component {
    render() { 
        return ( 
            <section className='author-section'>
                <img alt='Vanessa' src={vanImg}></img>
                <div>
                    <h4>
                        Vanessa Stevenson
                    </h4>
                    <p>
                        Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
                    </p>
                </div>    
                <p className='share-button'>
                    SHARE
                </p>
            </section>
        );
    }
}
 
export default Author;