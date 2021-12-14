import React from 'react';

import './post-list.styles.scss';

// Components
import PostItem from '../post-item/post-item';

/**
 * @param {*} posts List of posts object to loop through pass pass into the post-info component
 * @returns
 */
const PostList = ({ posts }) => (
  <div className='post-list'>
    {posts.map((post) => (
      <PostItem key={post.id} title={post.title} id={post.id} />
    ))}
  </div>
);

export default PostList;
