import React from 'react';

// Components
import { PostInfo } from '../../components/post-info/post-info.component';

class PostDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      postDetails: {},
    };
  }

  render() {
    return (
      <div>
        <PostInfo {...this.state.postDetails} />
      </div>
    );
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`)
      .then((response) => response.json())
      .then((postDetails) => this.setState({ postDetails: postDetails }));
  }
}

export default PostDetails;
