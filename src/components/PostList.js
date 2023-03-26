import React, { useEffect, useMemo, useState } from "react";

import PostItem from "./PostItem";
import { usePostsCrud } from "../contexts/PostsCrudContext";

import { TablePagination } from '@mui/material';

const PostList = () => {
    const { author, postsByAuthor, getPosts, posts } = usePostsCrud(); 
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        getPosts();
    }, []);

    const renderPostList = (author.length < 1 ? posts : postsByAuthor).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((post) => {
        return (
            <PostItem key={post.id} post={post} />
        );
    });

    const handleChangePage = (event, newPage) => setPage(newPage);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <div className="post-list">
                {renderPostList.length > 0 ? renderPostList : "No posts available"}
            </div>

            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={posts.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
}

export default PostList;
