import React from 'react';
import { useNavigate } from 'react-router-dom';

import './post-item.styles.scss';

/**
 * @param object Takes input values title and id
 * Displays title and uses id to navigate to correct page
 * @returns 
 */
const PostItem = ({ title, id }) => {
  const navigate = useNavigate();

  return (
    <div className='post-item'>
      <h2
        onClick={() => {
          navigate(`/post/${id}`);
        }}
      >
        {title}
      </h2>
    </div>
  );
};
export default PostItem;
