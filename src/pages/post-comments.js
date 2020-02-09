import React from 'react'
import Post from '../components/post'
import Comment from '../components/comment'

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comements: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    let params = new URLSearchParams(document.location.search.substring(1));
    let postid = params.get("postid");
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`, {
    	"method": "GET"
    })
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        comments: json,
      })
    });
  };

  render() {
    var { isLoaded, comments } = this.state;

    if (!isLoaded) {
      return <div className={"site-container"}>Loading...</div>
    } else {
    return (
      <div className={"site-container"}>
        <Comment comments={comments} />
      </div>
    )
    }
  }
}

export default Posts;
