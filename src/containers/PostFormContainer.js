import React, { Component } from 'react';
import { connect } from "react-redux";
import { createPost } from "../actions/posts";
class PostFormContainer extends Component {

    state = {
        errors: {},
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();

        formData.append("post[name]", form.name.value);
        form.picture.files[0] &&
            formData.append("post[picture]", form.picture.files[0], form.picture.value);

        this.props
            .dispatchCreatePost(formData)
            .then((postJson) => {
                this.props.history.push('/')
            })
            .catch((errors) => {
                this.setState({ errors });
            });
        
    }

    render() {
        return (
            <form
            className="max-w-6xl w-3/4 mx-auto  mt-16 shadow-lg px-4 py-6" 
                onSubmit={this.handleSubmit}   
            >
                <h1 className="text-center text-2xl font-semibold mb-2">New Post</h1>
                <fieldset className="">
                    <label htmlFor="name" className="block uppercase">
                        Name
                        <span className="text-red-400">{this.state.errors.name}</span>
                    </label>
                    <input 
                        type="text"
                        name="name" 
                        id="name" 
                        placeholder="Caption your post"
                        className={`w-full border p-4 my-4 focus:outline-none focus:ring-2 ${this.state.errors.name && "focus:ring-red-400 border-red-400"}`}
                    />
                </fieldset>
                <fieldset className="">
                    <label htmlFor="picture" className="block uppercase">
                        Picture
                        <span className="text-red-400">{this.state.errors.picture}</span>
                    </label>
                    <input 
                        type="file" 
                        className="w-full my-4"
                        name="picture"
                        id="picture"
                    />
                </fieldset>
                <button 
                    className="w-full p-4 bg-purple-300 mt-4 hover:bg-purple-400 transition-all duration-200" 
                    type="submit"
                >
                    Create Post
                </button>
            </form>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        dispatchCreatePost: (formData) => dispatch(createPost(formData)),
    }
}

export default connect(null, mapDispatchToProps)(PostFormContainer);