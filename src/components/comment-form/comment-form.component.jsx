import React from 'react';
import './comment-form.styles.scss';

// Components
import AddComment from '../add-comment/add-comment.component';
import CustomButton from '../custom-button/custom-button.component';

class CommentForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
      comment: ''
    };
  }

  render() {
    return (
      <form onSubmit={this.props.handleOnSubmit}>
        <AddComment handleCommentChange={this.handleCommentChange} />
        <CustomButton buttonText={'Post Comment'} type='submit' />
      </form>
    );
  }

  handleCommentChange = (event) => {
    const { value } = event.target;
    this.setState({comment: value})
  };

}

export default CommentForm;
