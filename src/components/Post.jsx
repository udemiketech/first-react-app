import { useParams, Navigate, useNavigate } from "react-router-dom"

function Post() {
    const param = useParams()
    const navigate = useNavigate()
    const status = 200

    if(status === 404) {
      return <Navigate to="/notfound"/>
    }
    const clickHandle = ()=>{
      console.log("Hello");
      navigate("/about")
    }
    
  return (
    <div>
      <h1>Post {param.id}</h1>
      <button onClick={clickHandle}>Click Here</button>
    </div>
  )
}

export default Post