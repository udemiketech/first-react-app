import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "./AuthContext";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [state, dispatch] = useAuth()

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await fetch(`https://startweb-feedback-api.onrender.com/api/feedback`);
      const data = await response.json();
      setFeedback(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

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

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`https://startweb-feedback-api.onrender.com/api/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": state.accessToken
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item._id === id ? { ...item, ...data } : item))
    );
  };

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      await fetch(`https://startweb-feedback-api.onrender.com/api/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((item) => item._id !== id));
    }
  };

  const addFeedbackHandler = async (newfeedback) => {
    const response = await fetch(`https://startweb-feedback-api.onrender.com/api/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": state.accessToken
      },
      body: JSON.stringify(newfeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
