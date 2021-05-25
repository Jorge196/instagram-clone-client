import React from 'react'
import { Link } from 'react-router-dom'

const PostListItem = ({ post }) => {
    return (
            <li className="" key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.name}</Link>
            </li> 
    );
} 

export default PostListItem