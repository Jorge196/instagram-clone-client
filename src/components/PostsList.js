import React from 'react'
import PostListItem from './PostListItem';

const PostsList = ({posts}) => {
    return (
        <>
            <h1>PostsList</h1>
            <ul>
                {posts.map(post => <PostListItem key={post.id} post={post}/>)}
            </ul>
        </>
    );
};

export default PostsList;