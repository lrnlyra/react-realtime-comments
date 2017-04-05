import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'

let data = [
  {id: 2, author: "John Doe", text: "Ola que tal"},
  {id: 1, author: "Jane Doe", text: "Muy bien"}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <CommentBox data={data} pollInterval={2000} />
      </div>
    )
  }
}

class CommentBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      render: false
    }
  }
  onCommentSubmit = comment => {
    comment.id = data[0].id + 1;
    data.unshift(comment)
    console.log(data)
    // change state to render component (little hack)
    this.setState({render: true})
  }
  render() {
    return (
      <div>
        <CommentForm onCommentSubmit={this.onCommentSubmit} />
        <CommentList data={this.props.data} />
      </div>
    )
  }
}

class CommentList extends Component {
  render() {
    let commentNodes = this.props.data.map(comment => <Comment author={comment.author} key={comment.id}> {comment.text} </Comment>)
    return (
      <div className="comment-list">
        <h3>Published comments :</h3>
        {commentNodes}
      </div>
    )
  }
}

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <span className="comment-author">
          {this.props.author} :
        </span>
        <span className="comment-text">
          {this.props.children}
        </span>
      </div>
    )
  }
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    }
  }
  onAuthorChange = e => this.setState({author: e.target.value})
  onContentChange = e => this.setState({text: e.target.value})
  onSendFormData = commentData => {
    this.setState({author: '', text: ''})
    this.props.onCommentSubmit(commentData);
  }
  onFormSubmit = e => {
    e.preventDefault();
    (!this.state.text || !this.state.author) ? alert('Empty field(s) !') : this.onSendFormData({author: this.state.author, text: this.state.text})
  }
  render() {
    return (
      <div>
        <h3>Write a comment :</h3>
        <form className="commentForm" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.onAuthorChange}
          />
          <input
            type="text"
            placeholder="Your comment"
            value={this.state.text}
            onChange={this.onContentChange}
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    )
  }
}

export default App
