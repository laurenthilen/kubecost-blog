import React, { useEffect } from "react";

import PostItem from "./PostItem";
import { usePostsCrud } from "../contexts/PostsCrudContext";

const PostList = () => {
    const { author, postsByAuthor, getPosts, posts } = usePostsCrud();

    useEffect(() => {
        getPosts();
    }, []);

    const renderPostList = (author.length < 1 ? posts : postsByAuthor).map((post) => {
        return (
            <PostItem key={post.id} post={post} />
        );
    });

    return (
        <div className="post-list">
            {renderPostList.length > 0 ? renderPostList : "No posts available"}
        </div>
    );
}

export default PostList;
