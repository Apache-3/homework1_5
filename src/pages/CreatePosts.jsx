
import React, { useState } from 'react'

export const CreatePosts = () => {
    const [createPost, setCreatePost] = useState([])
    const [title, setTitle] = useState('title')
    const [body, setBody] = useState('body')

    function handlerSubmit(event) {
        event.preventDefault()
        setCreatePost([...createPost, {title: title, body: body}])
    }
    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input value={title} type="text"
                    onChange={(event) => setTitle(event.target.value)} />
                <input value={body} type="text" 
                    onChange={(event) => setBody(event.target.value)} />
                <button type='submit'>create post</button>
            </form>
            <div className="new__posts">
                {createPost.map((post, index) => (
                    <div key={index} className="create__post">
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}
