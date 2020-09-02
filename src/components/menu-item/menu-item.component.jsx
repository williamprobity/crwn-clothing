import React from 'react';

import { withRouter } from 'react-router-dom';
// withRouter give access to history
// ${mtch.url}${linkUrl} be aware of any space
import './menu-item.styles.scss';
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className= {`${size} menu-item`}
        onClick ={ () => history.push(`${match.url}${linkUrl}`) }
    >
        <div 
        className='background-image' 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className='content'>
            <div className='title'> {title.toUpperCase()} </div>
            <div className='subtitle'> Shop Now</div>
        </div>
    </div>
);

export default withRouter(MenuItem);