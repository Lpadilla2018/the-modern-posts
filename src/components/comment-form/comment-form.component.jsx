import React from 'react';
import './comment-form.styles.scss';

// Components
import AddComment from '../add-comment/add-comment.component';
import CustomButton from '../custom-button/custom-button.component';

/**
 * Form that displays input boxes and a submit button
 * @param obeject Takes in handleOnSubmit to use for onSubmit action
 * @returns
 */
const CommentForm = ({ handleOnSubmit }) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <AddComment />
      <CustomButton buttonText={'Post Comment'} type='submit' />
    </form>
  );
};

export default CommentForm;
