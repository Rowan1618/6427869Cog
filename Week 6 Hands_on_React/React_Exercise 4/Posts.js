import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "How to Stay Productive While Working From Home",
          body: "Remote work can be challenging. To stay productive, set a fixed schedule, take regular breaks, and create a distraction-free workspace."
        },
        {
          id: 2,
          title: "Top 5 JavaScript Frameworks in 2025",
          body: "React, Vue, Svelte, SolidJS, and Qwik are dominating the frontend world. Each has unique strengths — choose based on project needs."
        },
        {
          id: 3,
          title: "Why Learning Data Structures Is Important",
          body: "Understanding data structures helps you write efficient code, solve complex problems, and ace technical interviews."
        }
      ],
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    alert("An error occurred in the component!");
    console.error("Caught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
