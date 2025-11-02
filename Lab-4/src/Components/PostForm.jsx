/*
PostForm is a presentational component that displays a form containing two text inputs, 
one for the title and one for the body.
*/

import '../App.css'


function PostForm() {
    return (
        <div className='post post-form'>
            <h3>Post Form</h3>
            <form>
                <label>Title: </label>
                <input type="text" name="name" />
                <br />
                <label>Body: </label>
                <input type="text" name="body" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostForm
