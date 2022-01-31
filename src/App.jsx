import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackData";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <>
        <Header></Header>
        <div className="container">
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList></FeedbackList>

          <Router>
            <AboutIconLink />
          </Router>
        </div>
      </>
    </FeedbackProvider>
  );
}

export default App;
