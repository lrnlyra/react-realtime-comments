import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let data = [
  {id: 1, author: "John Doe", text: "Ola que tal"},
  {id: 2, author: "Jane Doe", text: "Muy bien"}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to React</h3>
        </div>
        <CommentBox data={data} pollInterval={2000} />
      </div>
    );
  }
}

class CommentBox extends Component {
  render() {
    return (
      <div>
        <CommentForm />
        <CommentList data={this.props.data} />
      </div>
    );
  }
}

class CommentList extends Component {
  render() {
    let commentNodes = this.props.data.map(comment => <Comment author={comment.author} key={comment.id}> {comment.text} </Comment>);
    return (
      <div className="comment-list">
        <h3>Published comments :</h3>
        {commentNodes}
      </div>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <span className="comment-author">
          {this.props.author} :
        </span>
        <span className="comment-content">
          {this.props.children}
        </span>
      </div>
    );
  }
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      content: ''
    }
  }
  onAuthorChange(e) {
    this.setState({author: e.target.value})
  }
  onContentChange(e) {
    this.setState({content: e.target.value})
  }
  render() {
    return (
      <div>
        <h3>Write a comment :</h3>
        <form className="commentForm">
          <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.onAuthorChange.bind(this)}
          />
          <input
            type="text"
            placeholder="Your comment"
            value={this.state.content}
            onChange={this.onContentChange.bind(this)}
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

export default App;
