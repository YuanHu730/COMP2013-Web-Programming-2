/*
FakeApiApp, this is the logical component of the app that will contain three states:
    data: an array state that will hold all the data grabbed from the fake API
    loading: a Boolean state showing the loading sign if the data is still loading
    newPost: an object state that will store a new post
    The URL of the fake API is https://jsonplaceholder.typicode.com/posts
    Add all the handlers needed for the PostForm
*/

import PostForm from './PostForm.jsx';
import PostsContainer from './PostsContainer.jsx';
import { useState, useEffect } from "react";
// import posts from "../data/posts.js";


function FakeApiApp() {
    const [newPost, setNewPost] = useState({
        "userId": 0,
        "id": 0,
        "title": "",
        "body": ""
    });

    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchPosts();
    }, []);
  
    const fetchPosts = async () => {
        // await new Promise(resolve => setTimeout(resolve, 10000));
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        setPostList(posts);
        setNewPost({
            ...newPost,
            "id": Math.max(...posts.map(post => post.id)) + 1
        });
        setIsLoading(false);
    };

    const handleChange = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`title: ${newPost.name}, body: ${newPost.body}`);
        if (newPost.title === "" || newPost.body === "" ) return;
        setPostList(prevPostList => {
            const newPostList = [...prevPostList, newPost];
            return newPostList;
        });
        setNewPost(prevNewPost => {
            return {
                "userId": 0,
                "id": prevNewPost.id + 1,
                "title": "",
                "body": ""
            };
        });
    };

    return (
        <div>
            {isLoading && <h1 class='hint'>Loading...</h1>}
            <h1>Fake API App</h1>
            <PostForm newPost={newPost} handleChange={handleChange} handleSubmit={handleSubmit} />
            <PostsContainer postList={postList} />
        </div>
    );
}

export default FakeApiApp
