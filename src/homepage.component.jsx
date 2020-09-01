import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'> HATS </div>
                    <div className='subtitle'> Shop Now</div>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'> JACKETS</div>
                    <div className='subtitle'> Shop Now</div>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'> SNEAKERS</div>
                    <div className='subtitle'> Shop Now</div>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'> Women </div>
                    <div className='subtitle'> Shop Now</div>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>Mens </div>
                    <div className='subtitle'> Shop Now</div>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;
