import React from 'react';

import './post-info.styles.scss';

const PostInfo = ({ title, body }) => (
  <div className='post-info'>
    <h2>{title}</h2>
    <p>{body}</p>
  </div>
);

export default PostInfo;
