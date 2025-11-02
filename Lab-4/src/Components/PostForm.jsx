/*
PostForm is a presentational component that displays a form containing two text inputs, 
one for the title and one for the body.
*/

import '../App.css'


function PostForm({ newPost, handleChange, handleSubmit }) {
    return (
        <div className='post post-form'>
            <h3>Post Form</h3>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" name="title" value={newPost.title} onChange={handleChange} />
                <br />
                <label>Body: </label>
                <input type="text" name="body" value={newPost.body} onChange={handleChange} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostForm
