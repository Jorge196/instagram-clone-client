import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchPost } from '../actions/posts';
class PostShowContainer extends Component {
    state={
        post:{},
        comments:[],
        loading: true 
    }

    componentDidMount() {
        const postId = this.props.match.params.postId
        this.props.dispatchFetchPost(postId);
    }
    
    
    render() {
        
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                <div className=" mx-auto mt-16">
                   <img className="object-contain w-3/5" alt={this.props.post.name} src={this.props.post.picture_url}/>
                </div>
                <h1 className="text-3xl font-bold text-left mb-8 ">
                    {this.props.post.name} 
                </h1>
                <button className="bg-purple-400 rounded-lg border-2 border-yellow-400 hover:bg-indigo-700 hover:border-red-600 my-2"><Link to={`/posts/${this.props.post.id}/comments/new`}> Add comment</Link></button>
                <div className="grid grid-cols-3 gap-4">
                    {this.props.comments.map((comment) => (
                        <figure key={comment.id} className="p-4 shadow bg-yellow-100 rounded-lg">
                            <h3 className="font-bold">{comment.name}</h3>
                            <p>{comment.description}</p>
                            <p>{comment.created_at}</p>
                        </figure>
                    ))}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.currentPost.post,
        comments: state.currentPost.comments,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchPost: (postId) => dispatch(fetchPost(postId))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShowContainer);