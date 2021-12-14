import React from 'react';

import './post-details.styles.scss';

// Components
import BackButton from '../../components/back-button/back-button.component';
import PostInfo from '../../components/post-info/post-info.component';
import CommentList from '../../components/comment-list/comment-list.component';
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

        <div className='comment-header'>
          <h3>Write A Comment</h3>
          <hr></hr>
        </div>
        <CommentForm handleOnSubmit={this.addComment} />
        <BackButton />
      </div>
    );
  }

  componentDidMount() {
    this.callPostsAndCommentsServices();
  }

  /**
   * Uses form input values to make an API call in order to save the new comment
   * Update UI state
   * Then Reset form on successful API call
   * @param event Grab data from form event
   */
  addComment = async (event) => {
    // Stop reloading page on form submit
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const comment = event.target[2].value;

    try {
      const response = await this.callAddCommentService(name, email, comment);

      // Update UI state
      this.setState({
        postComments: [
          ...this.state.postComments,
          { name: name, email: email, body: comment },
        ],
      });

      // Clear form data
      event.target.reset();
    } catch (error) {
      console.error('Error Adding Comment: ', error.message);
    }
  };

  /**
   * POST call to save new comment
   * @param {*} name string type
   * @param {*} email string type
   * @param {*} comment string type
   * @returns JSON object response from API call
   */
  callAddCommentService(name, email, comment) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        body: comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }

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
