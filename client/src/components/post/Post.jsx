import './post.css'
import React from 'react'
import { Link } from 'react-router-dom'
export default function Post({post}) {

    const PF = "http://localhost:5000/images/"
    return (
        <div className="post">
        {post.photo &&
            <img className="postImg" src={PF+post.photo} alt="" />
        }
            <div className="postInfo">
                <div className="postCats">
                {post.categories.map((cat,idx) => (
                    <Link key={idx} className="link" to={`/?cat=${cat}`}>
                        <span  className="postCat">{cat}</span>
                    </Link>
                ))}
                    
                </div>
                <Link className="link" to={`/post/${post._id}`}>
                <span className="postTitle">
                    {post.title}
                </span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    )
}
