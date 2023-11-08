import { useState } from "react"
import Card from "../shared/card"
import {BsX, BsPencilSquare} from "react-icons/bs"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem({feedbody, deleteFeedback}) {
  const {deleteHandler, feedbackEdit} = useContext(FeedbackContext)

    // const [rating, setRating] = useState(8);
    // const [text, setText] = useState("testing text body");
    // const submitHandler = ()=>{
    //     setRating((prev) => {
    //         return prev + 1
    //     })
    // }
    // const decrease = ()=>{
    //     setRating((prev)=>{
    //         return prev - 1
    //     })
    // }
  return (
    <Card reverse={false}>
        <div className="num-display">{feedbody.rating}</div>
        <button onClick={()=>deleteHandler(feedbody.id)} className="close">
          <BsX/>
        </button>
        <button onClick={()=> feedbackEdit(feedbody)} className="edit">
          <BsPencilSquare color="purple"/>
        </button>
        <div className="text-display">{feedbody.text}</div>
        {/* <button onClick={submitHandler}>Submit</button>
        <button onClick={decrease}>Decrease</button> */}
    </Card>
  )
}

export default FeedbackItem