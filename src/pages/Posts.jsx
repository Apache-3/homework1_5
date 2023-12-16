import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function getQuery() {
            try {
                const response = await axios.get('https://dummyjson.com/posts')
                setPosts(response.data.posts)
            } catch {
                alert('ERROR');
            }
        }
        getQuery()
    }, [])
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <span>{post.id}</span>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}
