import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { usePostsCrud } from "../contexts/PostsCrudContext";

const Post = () => {
    const location = useLocation();
    const {id, userId, title, body} = location.state.post;
    const { comments, getComments, filterByAuthor, setAuthor } = usePostsCrud();

    useEffect(() => {
        getComments(id);
    }, []);

    const renderPostComments = comments.map((comment) => {
        return (
            <div className="comment">
                <p>Name: {comment.name}</p>
                <p>Email: {comment.email}</p>
                <p>{comment.body}</p>
            </div>
        );
    });

    return (
        <div className="post-details">
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <div className="comment-container">
                <h3>Comments:</h3>
                {renderPostComments}
            </div>

            <div className="buttons">
                <Link to="/"><button onClick={() => filterByAuthor(userId)}>See more posts by {userId}</button></Link>
                <Link to="/"><button onClick={() => setAuthor("")} className="button">Back to posts</button></Link>
            </div>
        </div>
    );
}

export default Post;