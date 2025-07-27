import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null,
            hasError: false
        };
    }

    loadPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Removed angle brackets
            if (!response.ok) {
                throw new Error(`Network response was not ok, status: ${response.status}`);
            }
            const data = await response.json();
            const fetchedPosts = data.map(item => new Post(item.id, item.title, item.body));
            this.setState({ posts: fetchedPosts });
        } catch (error) {
            console.error("Error loading posts:", error);
            this.setState({ error: error, hasError: true });
        }
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        console.error("Caught an error in Posts component:", error, info);
        this.setState({ hasError: true, error: error });
        alert("An error occurred: " + error.message + ". Please try again later.");
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <p>Error details: {this.state.error ? this.state.error.message : 'Unknown error'}</p>
                </div>
            );
        }

        if (this.state.posts.length === 0) {
            return <div>Loading posts...</div>;
        }

        return (
            <div>
                <h1>Blog Posts</h1>
                {this.state.posts.map(post => (
                    <div key={post.id} style={{ marginBottom: '20px', border: '1px solid #eee', padding: '15px' }}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;