import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)
    if (!isLoading &&(!feedback || feedback.length === 0)){
        return <p>No Feedback Yet</p>;
    }
  return isLoading? <h3>Loading...</h3> : (
    <div>
        {feedback.map((item)=>(
            <FeedbackItem
             key={item._id}
              feedbody={item} 
              />
        ))}
    </div>
  )
}

export default FeedbackList