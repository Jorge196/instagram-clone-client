import React from 'react'
import PostListItem from './PostListItem';

const PostsList = ({posts}) => {
    return (
        <>
            <h1>PostsList</h1>
            <ul>
                {posts.map(post => <PostListItem post ={post}/>)}
            </ul>
        </>
    );
};

export default PostsList;