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
        <CommentBox data={data} />
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
  render() {
    return (
      <h3>Write a comment :</h3>
    );
  }
}

export default App;
