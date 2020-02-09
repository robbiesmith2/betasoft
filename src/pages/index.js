import React from 'react'
import Post from '../components/post'
import ScrollToTop from '../components/totop'

import "../index.scss";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
    	"method": "GET"
    })
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        posts: json,
      })
    });
  };

  render() {
    var { isLoaded, posts } = this.state;

    if (!isLoaded) {
      return <div className={"site-container"}>Loading...</div>
    } else {
      return (
        <React.Fragment>
          <div className={"site-container"}>
            <Post posts={posts} />
          </div>
          <ScrollToTop />
        </React.Fragment>
      )
    }
  }
}

export default Posts;
