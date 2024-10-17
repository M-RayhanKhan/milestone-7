import { useEffect, useState } from "react"
import Post from "./Post"

export default function Posts(){
    const [posts, setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data.slice(0,10)))
    }, [])
    return (
        <div>
          <h2>Posts Data: {posts.length}</h2>
          {
            posts.map(post => <Post key={post.id} post={post}></Post>)
          }
        </div>
    )
}