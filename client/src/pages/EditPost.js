import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'

const EditPost = ({data}) => {

    const {id} = useParams();
    const post = data.filter(item => item.id === id)[0];

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} /><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" value={post.description} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
                <button className="deleteButton">Delete</button>
            </form>
        </div>
    )
}

export default EditPost