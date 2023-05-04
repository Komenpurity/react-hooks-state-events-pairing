
import React, {useState} from 'react'

export default function Video({url,id,title,comments,createdAt,upvotes,downvotes,views}) {
  
    const [show,setShow] = useState(false) 
    const [upvote,setUpvote] = useState(upvotes) 
    const [downvote,setDownvote] = useState(downvotes)

    const com = comments.map((e) => {
        return <li key={e.id}><h3>{e.user}</h3> {e.comment}</li>
    })

    function handleDisplay(){
        setShow((show) => !show) 
    }

    function handleUpvotes(){
        setUpvote((upvote) => upvote+1)
    }

    function handleDownvotes(){
        setDownvote((downvote) => downvote+1)
    }
  
    return (
    <div>
        <iframe
        width={919}
        height={525}
        src={url} 
        frameBorder="0"
        allowFullScreen
        title={title} 
      />
      <div>
        <h1>{title}</h1>
        <p>{views} views | Uploaded {createdAt}</p>
        <button className='d-inline m-2' onClick={handleUpvotes}>{upvote} like </button>
        <button className='d-inline' onClick={handleDownvotes}>{downvote} dislike</button>
        <button className='d-inline m-5' onClick={handleDisplay}>{show ? "Show" : "Hide"} Comments</button> 
        <hr></hr>
      </div>
       <div className= {show ? 'd-none' : 'd-inline'}>
        <h2>Comments(2)</h2> 
            <ul>
                {com}
            </ul>
       </div>
        
    </div>
  )
}
