function App(){
    const title = "My App"
    const body = "lorem ipsum dolor sit amet"
    const comments = [
      {id: 1, title: "Comment 1"},
      {id: 2, title: "Comment 2"},
      {id: 3, title: "Comment 3"},
    ]
  
    const showComments = true
    const commentBlock = (<div className="comments">
    <h2>Comments({comments.length})</h2>
    <ul>
      {comments.map((comment)=>(
        <li key={comment.id}>{comment.title}</li>
      ))}
    </ul>
  </div>)
  
      return (
         <div className="container">
          <h1>{title}</h1>
          <p>{body}</p>
  
          {showComments && commentBlock}
         </div>
      )
  }
  
  export default App;