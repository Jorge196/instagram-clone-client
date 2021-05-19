import React, { Component } from 'react'

export default class NewCommentContainer extends Component {

    state = {
        name: '',
        description: '',
        created_at: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/comments', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({comment: {
                post_id: this.props.match.params.postId,
                description: this.state.description,
                created_at: this.state.created_at,
                name: this.state.name,
            }})
        })
        .then(res => res.json())
        .then(commentJson => {
            this.props.history.push(`/posts/${this.props.match.params.postId}`);
        })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-8 py-6">
                <h1 className="text-3xl text-center font-semibold mb-8">New Comment</h1>
                <fieldset>
                    <label className="block uppercase">Name</label>
                    <input 
                        type="text" 
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder="Comment title"
                        className="w-full border border-2 p-4 my-4" 
                    />
                </fieldset>
                <fieldset>
                    <label className="block uppercase">Description</label>
                    <textarea className="w-full border border-2" 
                        name="description" 
                        onChange={this.handleChange}
                        value={this.state.description}
                        placeholder="Comment" 
                    ></textarea>
                </fieldset>
                <fieldset>
                    <label className="block uppercase">Created at</label>
                    <input 
                        type="datetime-local"
                        value={this.state.created_at}
                        name="created_at"
                        onChange={this.handleChange}
                        className="w-full border border-2 p-4 my-4" 
                    />
                </fieldset>
                <button type="submit" className="w-full p-4 bg-purple-300 mt-4 hover:bg-purple-400 transition-all duration-200">Add Comment</button>
            </form>
        )
    }
}
