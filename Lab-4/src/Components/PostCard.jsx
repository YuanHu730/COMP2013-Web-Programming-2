/*
PostCard, this is a presentational component that will show one post 
that will contain a title and a body of the post
*/

import '../App.css'


function PostCard({ post }) {
    return (
        <div className='post'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
}

export default PostCard
