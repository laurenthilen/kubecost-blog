import React from "react";
import { Link } from "react-router-dom";

const PostItem = (props) => {
    const { id, title, body } = props.post

    return (
        <div key={id} className="post-item">
            <Link to={`/posts/${id}`} state={{post: props.post}}>
                <h2>{title}</h2>
            </Link>
            <h3>{body}</h3>
        </div>
    )
}

export default PostItem;
