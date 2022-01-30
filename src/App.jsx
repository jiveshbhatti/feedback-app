import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/feedbackData"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import { v4 as uuidv4 } from 'uuid';
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
   
    </div>
    
    </>
    )
}


export default App