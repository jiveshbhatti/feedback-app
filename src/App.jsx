import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/feedbackData"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"

function App(){
    

   const [feedback, setFeedback] = useState(FeedbackData)

   const deleteFeedback=(id) =>{console.log('App', id)
    if(window.confirm('Are you sure you want to delete?')){
        setFeedback(feedback.filter((item)=>item.id !== id))

    }

}

    return (
    <>
    <Header ></Header>
    <div className="container">
        <FeedbackForm/>
        <FeedbackStats feedback = {feedback}/>
   <FeedbackList list={feedback} handleDelete={(id)=> deleteFeedback(id)}></FeedbackList>
   
    </div>
    
    </>
    )
}


export default App