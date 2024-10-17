import './Post.css'
export default function Post({post}){
    console.log(post);
    const {title, userId, body, id} = post;
    return(
        <div className='post'>
            <p>title: {title}</p>
            <p style={{color: id == 8 ? 'green' : 'red' }}>userId: {userId}</p>
            <p>PostId: {id}</p>
            <p>{body}</p>
        </div>
    )
}