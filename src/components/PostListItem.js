import React from 'react'

const PostListItem = ({ post }) => {
    
    return <li className="" key={post.id}>{post.name}</li>
}

export default PostListItem