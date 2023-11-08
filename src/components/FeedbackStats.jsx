import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackStats({fback}) {
  const {feedback} = useContext(FeedbackContext)
    let average = feedback.reduce((acc, cur)=>{
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1)
  return (
    <div className="stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//     fback: PropTypes.array.isRequired,
// }

export default FeedbackStats