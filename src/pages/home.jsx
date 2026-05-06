import CategoryIcons from "../components/category-icons";
import StoryCard from "../components/story-card";
import { FaPlay, FaQuestion } from 'react-icons/fa';
import { PiSpeakerHighFill } from "react-icons/pi";

function Home() {
    return(
    <div id = "home"> 
      <h1 id =" title">The Daily Northwestern's <br /> Spring 2026 Poll</h1>
      <p>The latest edition of The Daily's biannual student poll is here! <br></br> 
      Take a look around.</p>

      
      <h2 id = "sec-title">EXPLORE THE RESULTS</h2>
      <CategoryIcons /> 

    <div id = "from-the-editor"> 
      <h2 className = "sec-title">FROM THE EDITOR</h2> 
      
    </div>

    <div id = "methodology">
      <h2 className = "sec-title">METHODOLOGY</h2> 
        
      <a href="https://dailynorthwestern.com" target="_blank" rel="noreferrer" className="audio-box-link">
      <h3 className = 'audio-box'> <PiSpeakerHighFill /> Listen behind the scenes</h3>
      </a> 
    </div>

    <div id = "more">
      <h2 className = "sec-title">MORE</h2> 

      <div className="story-card-grid">
        <StoryCard 
        title = "How similar are you to the average NU student?"
        photo = '/placeholder_story.png'
        icon = {<FaQuestion />}
        link="https://dailynorthwestern.com/"
        /> 

        <StoryCard 
        title = "Deep dive"
        photo = '/placeholder_story.png'
        icon = {<FaPlay />} 
        link="https://dailynorthwestern.com/"
        /> 

        <StoryCard 
        title = "Take the poll quiz"
        photo = '/placeholder_story.png'
        icon = {<FaQuestion />}
        link="https://dailynorthwestern.com/"
        /> 
      </div>

      </div> 

    </div> 
  )
  }
  
  export default Home; 