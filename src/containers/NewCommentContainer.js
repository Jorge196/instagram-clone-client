import React, { Component } from 'react'
import { connect } from "react-redux";
import { createComment } from "../actions/comments"

class NewCommentContainer extends Component {

    state = {
        name: "",
        description: "",
        created_at: "", 
        errors: {}
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const currentDate = new Date();
        e.preventDefault();
        this.props.dispatchCreateComment({
            name: this.state.name,
            description: this.state.description,
            created_at: currentDate.toISOString(),
            post_id: this.props.match.params.postId
        })
            .then(commentJson => {
                this.props.history.push(`/posts/${this.props.match.params.postId}`);
            })
        .catch(errors => {
            this.setState({ 
                errors 
            })
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-8 py-6">
                <h1 className="text-3xl text-center font-semibold mb-8">New Comment</h1>
                <fieldset>
                    <p className="h-8 pl-4 text-red-400">{this.state.errors.name}</p>
                    <input 
                        type="text" 
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder="Comment title"
                        className={`w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4 ${this.state.errors.name && 'focus:ring-red-400' }`}
                    />
                </fieldset>
                <fieldset>
                    <p className="h-8 pl-4 text-red-400">{this.state.errors.description}</p>
                    <textarea className={`w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4 ${this.state.errors.description && 'focus:ring-red-400' }`}
                        name="description" 
                        onChange={this.handleChange}
                        value={this.state.description}
                        placeholder="Comment" 
                    ></textarea>
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