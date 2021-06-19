import React, { Component } from 'react'
import { connect } from "react-redux";
import { createComment } from "../actions/comments"

class NewCommentContainer extends Component {

    state = {
        name: "",
        description: "",
        created_at: "", 
        error: {}
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatchCreateComment({
            name: this.state.name,
            description: this.state.description,
            created_at: this.state.created_at})
            .then(commentJson => {
                this.props.history.push(`/posts/${this.props.match.params.postId}`);
            })
        .catch(errors => {
            this.setState({ errors })
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-8 py-6">
                <h1 className="text-3xl text-center font-semibold mb-8">New Comment</h1>
                <fieldset>
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


const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateComment: (formData) => dispatch(createComment(formData))
    }
}

export default connect(null, mapDispatchToProps)(NewCommentContainer);