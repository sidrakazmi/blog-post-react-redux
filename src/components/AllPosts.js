import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, editPost } from '../actions/actions';

const mapStateToProps = state => {
    return { posts: state.posts };
};

const mapDispatchToProps = dispatch => {
    return {
        deletePost: post => dispatch(deletePost(post)),
        editPost: post => dispatch(editPost(post)),
    };
};
  

class AllPosts extends Component {

  onDeletePost = post => {
      this.props.deletePost(post);
  }

  editPost = post => {
    this.props.editPost({ ...post, message: 'nytt meddelande' })
  }
    
  render() {
    const posts = this.props.posts.map( post => {

        return (<div className='inputs' key={post.id}>
                  
                    <h3 >{post.title}</h3>
                    
                    <p onClick={() => this.editPost(post)}>{post.message}</p>
                   <button onClick={() => this.editPost(post)}> Edit </button>
                    <button onClick={ () => this.onDeletePost(post)}>Delete</button>    
                </div>);
    });

    return (
      <div className="AllPosts">    
        {posts}
      </div>
    );
  }
}

const ap = connect(mapStateToProps, mapDispatchToProps)(AllPosts);
export default ap;
