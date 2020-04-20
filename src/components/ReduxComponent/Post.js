import React, { Component } from 'react'
import { Provider } from "react-redux";

//For redux install npm install redux react-redux redux-thunk

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    async onSubmit(e) {
        e.preventDefault();
        console.log("CLicked")
        let data = {
            'title': this.state.title,
            'body': this.state.body
        }

        let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let result = await res.json()
        console.log(result)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }



    render() {
        //console.log(this.state)
        return (
            <div>
                <h1>
                    Add Post
                </h1>
                <form onSubmit={this.onSubmit}>
                    <input name='title' type='text' value={this.state.title} onChange={this.onChange} />
                    <input name='body' type='text' value={this.state.body} onChange={this.onChange} />
                    <button type='submit' > Submit</button>
                </form>
            </div>
        )
    }
}

export default Post
