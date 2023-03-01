import { createContext, useContext, useState } from "react";
import axios from "axios";

const postsCrudContext = createContext();

export function PostsCrudContextProvider({children}) {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [postsByAuthor, setPostsByAuthor] = useState([]);
    const [author, setAuthor] = useState("");

    const getPosts = async () => {
        await axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {setPosts(res.data);})
            .catch((err) => {console.log(err.message);});
    }
  
    const getComments = async (id) => {
        await axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((res) => {setComments(res.data);})
            .catch((err) => {console.log(err.message);});
    }

    const filterByAuthor = (author) => {
        setAuthor(author);
        if (author !== "") {
            const newPostList = posts.filter((post) => {
                return post.userId == author;
            });
            setPostsByAuthor(newPostList);
        } else {
            setPostsByAuthor(posts);
        }
    };

    const value = {
        author,
        comments,
        filterByAuthor,
        getComments,
        getPosts,
        posts,
        postsByAuthor,
        setAuthor,
    }

    return (
        <postsCrudContext.Provider value={ value }>
            {children}
        </postsCrudContext.Provider>
    )
}

export function usePostsCrud() {
    return useContext(postsCrudContext)
}
