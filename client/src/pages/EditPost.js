import React , {useState} from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'
const EditPost = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({id: null, title: "", author: "", description: ""});


    const updatePost = async (event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            .update({ title: post.title, author: post.author,  description: post.description})
            .eq('id', id);

        window.location = "/";

    }
    const deletePost = async (event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            .delete()
            .eq('id', id);

        window.location = "/";

    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" name="description" value={post.description} onChange={handleChange} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={updatePost} />
                <button className="deleteButton">Delete</button>
            </form>
        </div>
    )
}

export default EditPost