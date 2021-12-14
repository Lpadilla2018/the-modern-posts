import React from 'react';
import './homepage.styless.scss';

// Components
import PostList from '../../components/post-list/post-list.component';
import SearchInput from '../../components/search-input/search-input.component';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      searchInput: '',
    };
  }

  render() {
    // Get current state and filter posts if input value is present
    const { posts, searchInput } = this.state;
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div>
        <h1 className='title'>THE MODERN POSTS</h1>

        <SearchInput
          placeholder='Search by post'
          handleChangeFunction={this.setSearchInputText}
        />

        <div className='section-title'>
          <h2>Latest Posts</h2>
          <hr></hr>
        </div>

        <PostList posts={filteredPosts} />
      </div>
    );
  }

  /**
   * Sets state of search input text in order to update UI that depends on data being changed
   * @param {*} event
   */
  setSearchInputText = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => this.setState({ posts: posts }));
  }
}

export default HomePage;
