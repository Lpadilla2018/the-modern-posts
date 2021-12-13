import React from 'react';
import './homepage.styless.scss';

// Components
import PostList from '../../components/post-list/post-list.component';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  render() {
    return (
      <div>
        <h1 className='title'>THE MODERN POSTS</h1>

        {/* <div className='section-title'>
          <h2>The Latest</h2>
        </div> */}

        <PostList posts={this.state.posts} />
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => this.setState({ posts: posts }));
  }
}

export default HomePage;
