import React, { Component } from 'react'
import { connect } from "react-redux";
import PostsList from '../components/PostsList'

class PostsIndexContainer extends Component {

    // componentDidMount() {
    //     this.props.dispatchFetchPosts();
    // }

    render(){
        if(this.props.loadingState === "notStarted") {
            return null
        }

        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                {this.props.loadingState === "inProgress" ? (
                    "loading spinner"
                ): (
                 <PostsList posts={this.props.posts} /> 
                )}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.list,
        loadingState: state.posts.loadingState
    }
}

export default connect (mapStateToProps)(PostsIndexContainer)