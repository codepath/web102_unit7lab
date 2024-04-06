import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'
const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('Posts')
                .select('*');
            if (error) console.log('error', error);
            else setPosts(data);
        }
        // setPosts(props.data);

        fetchData();
    }, []);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} title={post.title} author={post.author} description={post.description}/>
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;