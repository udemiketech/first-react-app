import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is coming from context",
      rating: 10,
    },
    {
      id: 2,
      text: "This is coming from context",
      rating: 7,
    },
    {
      id: 3,
      text: "This is coming from context",
      rating: 8,
    },
  ]);

  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  const feedbackEdit = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updItem)=>{
    setFeedback(
        feedback.map((item)=> (item.id === id ? {...item, ...updItem} : item))
    )
  }

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedbackHandler = (newfeedback) => {
    newfeedback.id = uuidv4();
    setFeedback([newfeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedbackHandler,
        deleteHandler,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
