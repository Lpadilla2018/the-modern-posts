import React from 'react';
import { useNavigate } from 'react-router-dom';

import './post-item.styles.scss';

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
