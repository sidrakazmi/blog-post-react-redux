import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/actions';

const mapStateToProps = state => {
    return { posts: state.posts };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: post => dispatch(addPost(post)),
  };
};


class NewPost extends Component {

    state = {
        title: '',
        message: '',
    }


   
    handleSubmit = (event) => {
        
        const post = {
          id: Math.floor(Math.random() * 100000) +1,
          title: this.state.title,
          message :  this.state.message,
          timeStamp : Date.now()
        }

        this.props.addPost( post );


        console.log(post);
        event.preventDefault();
    }

    onTitleChange = event => {
        this.setState({ title: event.target.value });
    }

    onMessageChange = event => {
        this.setState({ message: event.target.value });
    }

    render() {
        return (
            <div className="NewPost">   
                
                    <h1>Create Post</h1>

                    <form onSubmit={this.handleSubmit}>
                        <input required type="text" placeholder="Enter Post Title" value={this.state.title} onChange={this.onTitleChange}/><br /><br />
                        <textarea required rows="4" cols="20" placeholder="Enter Text here..." value={this.state.message} onChange={this.onMessageChange}/><br /><br />
                        <button onClick={this.handleSubmit}>Post Now !</button>
                    </form>
                

            </div>
        );
    }
}

const np = connect(mapStateToProps, mapDispatchToProps)(NewPost);
export default np;
