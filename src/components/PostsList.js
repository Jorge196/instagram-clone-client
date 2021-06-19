import React from 'react'
import PostListItem from './PostListItem';

const PostsList = ({posts}) => {
    return (
        <>
            <h1 className="text-center text-2xl font-semibold mb-2 text-purple-500">Posts List</h1>
            <div className="">
                <figure className="grid grid-cols-3 gap-3 p-4 shadow bg-yellow-300 rounded-lg">
                    <ul className="text-blue-400 hover:text-purple-600 ">
                        {posts.map(post => <PostListItem key={post.id} post={post}/>)}
                    </ul>
                </figure>   
            </div>
        </>
    );
};

export default PostsList;