import React, { Component } from 'react'
import PostsList from '../components/PostsList'

export default class PostsIndexContainer extends Component {
    state = {
        posts: [],
        loading: true 
    }

    componentDidMount() {
        setTimeout(() =>{
            this.setState({
                posts: [
                    {id:1, name: 'Instagram post'},
                    {id:2, name: 'Another instagram post'}
                ],
                loading: false
            });
        }, 1000)
    }

    render(){
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                {this.state.loading ? 'loading spinner' : <PostsList posts={this.state.posts} /> }
            </section>
        )
    }
}