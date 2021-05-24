import React from 'react'
import PostListItem from './PostListItem';

const PostsList = ({posts}) => {
    return (
        <>
            <h1 className="text-center text-2xl font-semibold mb-2 text-purple-200">Posts List</h1>
            <ul className="text-yellow-500 hover:text-purple-600">
                {posts.map(post => <PostListItem key={post.id} post={post}/>)}
            </ul>
        </>
    );
};

export default PostsList;