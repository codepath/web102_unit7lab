import React, {useState, useEffect} from 'react';
import './CreatePost.css'
import { supabase } from '../client'
// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseAnonKey);
const CreatePost = (event) => {

     console.log(supabase);
        const [post, setPost] = useState({title: "", author: "", description: ""})
    
        const createPost = async (event) => {
            event.preventDefault();
          
            await supabase
              .from('Posts')
              .insert({title: post.title, author: post.author, description: post.description})
              .select();
          
            window.location = "/";
          }
    
        const handleChange = (event) => {
            const {name, value} = event.target;
            console.log(name, value);
            setPost( (prev) => {
                return {...prev, [name]: value}
            });
        }
    
        // Rest of your component code...

    
    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" onChange={handleChange} /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" name="description" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost