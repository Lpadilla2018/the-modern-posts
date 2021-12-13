import React from 'react';

import './post-info.styles.scss';

/**
 * 
 * @param object Takes input values title and body
 * Displays title and body of the current post
 * @returns 
 */
const PostInfo = ({ title, body }) => (
  <div className='post-info'>
    <h2>{title}</h2>
    <p>{body}</p>
  </div>
);

export default PostInfo;
