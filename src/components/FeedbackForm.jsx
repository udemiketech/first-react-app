import Card from "../shared/card"
import { useState, useContext, useEffect } from "react";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";



function FeedbackForm({}) {
    const {addFeedbackHandler, editFeedback, updateFeedback} = useContext(FeedbackContext)
    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")
    const [rating, setRating] = useState(10)

    useEffect(()=>{
        if (editFeedback.edit === true){
            setBtnDisabled(false)
            setText(editFeedback.item.text)
            setRating(editFeedback.item.rating)
        }
    }, [editFeedback])


    const handleTextChange = (e)=>{
        if (text === "") {
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== "" && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Review must be atleast 10 characters')
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    };
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }

            if (editFeedback.edit === true){
                updateFeedback(editFeedback.item.id, newFeedback)
            }else{
                addFeedbackHandler(newFeedback);
            }
            setText("")
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h3>How would you like to rate our service</h3>
            <RatingSelect select={(rating)=> setRating(rating)}/>
            <div className="input-group">
                <input type="text" onChange={handleTextChange}
                value={text}
                placeholder="Write a review"/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                {message && <div className="message">{message}</div>}
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm