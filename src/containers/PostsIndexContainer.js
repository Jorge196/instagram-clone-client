import React, { Component } from 'react'
import PostsList from '../components/PostsList'

export default class PostsIndexContainer extends Component {
    state = {
        posts: [],
        loading: true 
    }

    componentDidMount() {
        fetch('http://localhost:3001/posts', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(postsJson => {
            console.log('posts', postsJson)
            this.setState({ 
                posts: postsJson,
                loading: false
            })
        })
    }

    render(){
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                {this.state.loading ? 'loading spinner' : <PostsList posts={this.state.posts} /> }
            </section>
        )
    }
}