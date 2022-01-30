import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/feedbackData"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import { v4 as uuidv4 } from 'uuid';
import AboutPage from "./pages/AboutPage"
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import AboutIconLink from "./components/AboutIconLink"
import Card from "./components/shared/Card"
function App(){
    

   const [feedback, setFeedback] = useState(FeedbackData)

   const deleteFeedback=(id) =>{console.log('App', id)
    if(window.confirm('Are you sure you want to delete?')){
        setFeedback(feedback.filter((item)=>item.id !== id))

    }

}
    const addFeedback = (feedbackObj)=> {
        feedbackObj.id = uuidv4()
       
        if(window.confirm('Are you ready to submit feedback?')){
            setFeedback([feedbackObj, ...feedback])
        }

        console.log(feedback, 'all feedback')
    }


    return (
    <>
    <Header ></Header>
    <div className="container">
        <FeedbackForm handleAdd = {(e)=> addFeedback(e)}/>
        <FeedbackStats feedback = {feedback}/>
   <FeedbackList list={feedback} handleDelete={(id)=> deleteFeedback(id)}></FeedbackList>
   
   <Router>

<AboutIconLink/>
</Router>
    </div>
    

    </>
    )
}


export default App