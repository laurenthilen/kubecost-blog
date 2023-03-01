import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Post from "./components/Post";
import PostList from "./components/PostList";
import { PostsCrudContextProvider } from "./contexts/PostsCrudContext";

import "./styles.css";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <PostsCrudContextProvider>
                    <Routes>
                        <Route path="/" exact element={<PostList />} />
                        <Route path="/posts/:id" element={<Post />} />
                    </Routes>
                </PostsCrudContextProvider>
            </Router>
        </div>
    );
}

export default App;
