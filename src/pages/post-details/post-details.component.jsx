import React from 'react';

import './post-details.styles.scss';

// Components
import BackButton from '../../components/back-button/back-button.component';
import PostInfo from '../../components/post-info/post-info.component';
import CommentList from '../../components/comment-list/comment-list.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import AddComment from '../../components/add-comment/add-comment.component';
import CommentForm from '../../components/comment-form/comment-form.component';


class PostDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      postDetails: {},
      postComments: [],
    };
  }

  render() {
    return (
      <div className='post-details'>
        <PostInfo {...this.state.postDetails} />
        <CommentList comments={this.state.postComments} />

        <CommentForm handleOnSubmit={this.addComment}/>
        <BackButton />
      </div>
    );
  }

  componentDidMount() {
    this.callPostsAndCommentsServices();
  }

  addComment = (event) => {
    // Stop reloading page on form submit
    event.preventDefault();
    this.setState({
      postComments: [
        { name: 'test', email: 'test', body: 'test' },
        ...this.state.postComments,
      ],
    });
  };

  /**
   * Calls services in parallel to retrieve Post Details and Post Comments
   */
  callPostsAndCommentsServices() {
    Promise.all([
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.props.postId}`
      ).then((response) => response.json()),
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`
      ).then((response) => response.json()),
    ])
      .then(([postDetails, comments]) => {
        this.setState({ postDetails: postDetails });
        this.setState({ postComments: comments });
      })
      .catch((error) => {
        console.error('Error Calling Services: ', error.message);
      });
  }
}

export default PostDetails;
