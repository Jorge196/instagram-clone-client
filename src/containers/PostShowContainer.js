import React, { Component } from 'react'

export default class PostShowContainer extends Component {
    state={
        post:{},
        comments:[],
        loading: true 
    }

    componentDidMount() {
        const postId = this.props.match.params.postId
        fetch(`http://localhost:3001/posts/${postId}`)
        .then(res => res.json())
        .then(({post, comments}) => {
            this.setState({
                post,
                comments,
                loading: false
            })
        })
    }
    
    render() {
        if (this.state.loading) {
            return <div>Loading Spinner</div>
        }
        return (
            <section>PostShowContainer</section>
        )
    }
}