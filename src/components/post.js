import React from 'react';
import { MdComment } from 'react-icons/md';
import Router from 'next/router';

const Post = ({ posts }) => {
  posts = posts.slice(0,50);

  const post = posts.map((post, index) =>
    <div key={post.id} className={"posts__item"} onClick={() => Router.push({ pathname: '/post-comments', query: {postid: `${post.id}`}})}>
      <h2 className={"posts__header"}>
        {post.title}
      </h2>
      <p className={"posts__text"}>
        {post.body}
      </p>
      <div className={"posts__link"}>
        <a>
          <MdComment />View Comments
        </a>
      </div>
    </div>
  );

  return (
    <div className={"posts"}>
      {post}
    </div>
  )
};

export default Post
