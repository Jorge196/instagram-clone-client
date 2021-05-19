import React from 'react'
import PostListItem from './PostListItem';

const PostsList = ({posts}) => {
    return (
        <>
            <h1 className="text-center text-2xl font-semibold mb-2">Posts List</h1>
            <ul>
                {posts.map(post => <PostListItem key={post.id} post={post}/>)}
            </ul>
        </>
    );
};

export default PostsList;