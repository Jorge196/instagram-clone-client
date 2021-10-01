import React, {useState}from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ post }) => {
    const [count, setCount] = useState(0);



    return (
            <li className="" key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.name}</Link>
                <span>{" "}</span> 
                    <button className="bg-purple-700 text-yellow-200 rounded-lg border-2 border-yellow-400 hover:bg-indigo-700 hover:border-red-600 my-2"onClick={() => setCount(count + 1)} id={post.id}> Like: {count} </button>
                 
            </li> 
    );
} 

export default PostListItem