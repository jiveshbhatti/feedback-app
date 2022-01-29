import { useState } from "react"
import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"

import FeedbackData from "./data/feedbackData"

function App(){
    

   const [feedback, setFeedback] = useState({FeedbackData})

    return (
    <>
    <Header ></Header>
    <FeedbackItem></FeedbackItem>
   
    </>
    )
}


export default App