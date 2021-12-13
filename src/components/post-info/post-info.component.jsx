import React from 'react';

import './post-info.styles.scss';

export const PostInfo = ({ title, body }) => (
  <div className='post-info'>
    <h2>{title}</h2>
    test
    <p>{body}</p>
  </div>
);
