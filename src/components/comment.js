import React from 'react'
import Router from 'next/router'
import { MdMailOutline } from 'react-icons/md'
import { TiArrowBack } from 'react-icons/ti'

const Comments = ({comments}) => {
  const list = comments.map((comment, index) =>
    <div className="comments__comment comment" key={comment.id}>
        <div className="comment__header">
          <div className="comment__count"><span>{index+1}</span></div>
          <h2>{comment.name}</h2>
        </div>
        <div className="comment__wrapper">
        <p>{comment.body}</p>
        <a className={"comment__email"} href={'mailto:' + comment.email}><MdMailOutline />{comment.email}</a>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <a className={"return__link"} onClick={() => Router.push({ pathname: '/index'})}>
        <TiArrowBack />Return to posts
      </a>
      <div className="comments">
        {list}
      </div>
    </React.Fragment>
  )
}

export default Comments
