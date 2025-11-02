/*
PostsContainer is a presentational component 
that serves as the main container for all PostCard components. 
Try to display in descending order, so the new posts appear first in the list.
*/

import '../App.css'
import PostCard from './PostCard.jsx'


function PostsContainer({ postList }) {
    return (
        <div className='posts-container'>
            {postList.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostsContainer
