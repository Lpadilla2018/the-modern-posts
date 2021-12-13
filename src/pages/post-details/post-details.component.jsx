import React from 'react';

import './post-details.styles.scss';

// Components
import BackButton from '../../components/back-button/back-button.component';
import PostInfo from '../../components/post-info/post-info.component';

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
        {/* create component */}
        <div className='comments-list'>
          {this.state.postComments.map((comment, index) => (
            <div key={index}>
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
        <BackButton />
      </div>
    );
  }

  componentDidMount() {
    this.callPostsAndCommentsServices();
  }

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
