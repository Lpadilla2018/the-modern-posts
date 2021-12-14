import React from 'react';
import './comment-form.styles.scss';

// Components
import AddComment from '../add-comment/add-comment.component';
import CustomButton from '../custom-button/custom-button.component';

const CommentForm = (props) => {
  return (
    <form onSubmit={props.handleOnSubmit}>
      <AddComment />
      <CustomButton buttonText={'Post Comment'} type='submit' />
    </form>
  );
};

export default CommentForm;
