import { useState } from "react";
import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem";
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Card from "./shared/card";
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Register from "./components/Register";
import Login from "./components/Login";

import AboutPage from "./components/AboutPage";
import AbouticonLink from "./components/AbouticonLink";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";
import AuthProvider from "./context/AuthContext";
import useLocalStorage from "./hooks/useLocalStorage"

function App(){
    const {getItem} = useLocalStorage("x-auth-storage")
    const token = getItem()
    let authInitialState = {accessToken: token ?? null}
 
    return (
      <AuthProvider defaultState={authInitialState}>
        <FeedbackProvider>
         <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={
              <>
               <FeedbackForm />
          <FeedbackStats />
        <FeedbackList />
              </>
            }/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/post/:id" element={<Post/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>

          <Card>
          <NavLink to="/" activeclassname="active">
            Home/
          </NavLink>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </Card>
        </div>

        
        <AbouticonLink/>
      </Router>
    
      </FeedbackProvider>
     
      </AuthProvider>
    )
}

export default App;