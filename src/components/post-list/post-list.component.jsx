import React from 'react';

import './post-list.styles.scss';

// Components
import PostItem from '../post-item/post-item';

export const PostList = ({ posts }) => (
  <div className='post-list'>
    {posts.map((post) => (
      <PostItem key={post.id} title={post.title} id={post.id} />
    ))}
  </div>
);
