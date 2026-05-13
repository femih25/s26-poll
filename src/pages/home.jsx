import CategoryIcons from "../components/category-icons";
import StoryCard from "../components/story-card";
import { FaPlay, FaQuestion } from 'react-icons/fa';
import { PiSpeakerHighFill } from "react-icons/pi";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
      document.body.classList.add('page-home')
      return () => document.body.classList.remove('page-home')
    }, [])

    return(
    <div id = "home"> 
      <h1 id =" title">THE DAILY NORTHWESTERN'S <br /> SPRING 2026 POLL</h1>
      <p>The latest edition of The Daily's biannual student poll is here! <br></br> 
      Take a look around.</p>

      
      <h2 id = "sec-title">EXPLORE THE RESULTS</h2>
      <CategoryIcons /> 

    <div id = "from-the-editor"> 
      <h2 className = "sec-title">FROM THE EDITOR</h2> 
      <p className = 'box'>Northwestern is in full bloom as ambitions come to fruition. As we approach the conclusion of the 2025-26 academic year, The Daily’s Spring Poll aimed to capture student voices and the NU experience.<br></br><br></br>
      This year was marked by pivotal issues, including the pervasive rise of artificial intelligence, shifts in University administration and ongoing tensions in a polarized political climate. Students are now left weathering the uncertain higher education landscape. They continue to navigate their college experience, planting seeds for their future rooted in community and belonging.<br></br><br></br>
      Through these questions, students weighed in on these issues and more, offering a glimpse into the NU undergraduate ecosystem that is learning to flourish in the face of unpredictability.
      </p>
      
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