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
    <img className = "la" src = '/s26poll/la.jpg'/>
      <h1 id =" title">THE DAILY NORTHWESTERN'S <br /> SPRING 2026 POLL</h1>
      <p>The latest edition of The Daily's biannual student poll is here.<br></br> 
      Take a look around.</p>





      <h2 id = "sec-title">EXPLORE THE RESULTS</h2>
      <CategoryIcons /> 

    
    <div id = "from-the-editor"> 
    <img className = 'num_illo' src = '/s26poll/questions.png' alt = '45 questions'/>
      <h2 className = "sec-title">FROM THE EDITOR</h2> 
      <p className = 'box'>Northwestern is in full bloom as ambitions come to fruition. As we approach the conclusion of the 2025-26 academic year, The Daily’s Spring Poll aimed to capture student voices and the NU experience.<br></br><br></br>
      This year was marked by pivotal issues, including the pervasive rise of artificial intelligence, shifts in University administration and ongoing tensions in a polarized political climate. Students are now left weathering the uncertain higher education landscape. They continue to navigate their college experience, planting seeds for their future rooted in community and belonging.<br></br><br></br>
      Through these questions, students weighed in on these issues and more, offering a glimpse into the NU undergraduate ecosystem that is learning to flourish in the face of unpredictability.
      </p>
      
    </div>

    <div id = "methodology">
    <img className = 'num_illo' src = '/s26poll/responses.png' alt = '45 questions'/>
      <h2 className = "sec-title">METHODOLOGY</h2> 
      <p className = 'box'>Responses to The Daily Spring 2026 Poll were collected between April 13 and April 22. The poll was administered through a digital form limited to respondents with Northwestern student emails, allowing only one response per email address. The poll was distributed through social media, email lists and in-person polling stations. In total, 540 undergraduate students at NU responded to the poll.<br></br><br></br>
      Consistent with the Fall 2025 and Spring 2025 polls, results were weighted to correct for sampling biases and better represent NU’s undergraduate population. The weight adjustments were applied by gender, class year and academic school in accordance with the University’s public data.<br></br><br></br>
      Although weighing improves the balance of demographics, the poll is still subject to potential sampling bias. However, the survey’s broad scope aimed to reduce participation bias to capture a more balanced spectrum of student sentiment.<br></br><br></br>
      To ensure significance and protect respondent anonymity, data from groups with fewer than 60 respondents were generally combined into broader categories or excluded from the breakdowns. Where specific smaller groups were visualized, a disclaimer is provided to note the smaller sample size.<br></br><br></br> 
      Some open responses were also aggregated into existing or new categories in the data cleaning process. Besides anonymous write-in comments, The Daily does not publish individual response data.
</p>
    </div>

    <div id = "more">
      <h2 className = "sec-title">MORE</h2> 

      <div className="story-card-grid">
        <StoryCard 
        title = "How well do you know your peers?"
        photo = '/s26poll/quiz-illo.jpg'
        icon = {<FaQuestion />}
        link="https://dailynorthwestern.com/2026/05/13/games/polling-quiz-how-well-do-you-know-your-peers/"
        />

        <StoryCard 
        title = "Listen behind the scenes"
        photo = '/s26poll/bts-illo.jpg'
        icon = {<PiSpeakerHighFill />}
        link="https://dailynorthwestern.com/2026/05/13/audio/behind-the-scenes-of-nu-in-bloom-the-dailys-spring-2026-poll/"
        />
      </div>
    </div> 
    </div> 
  )
  }
  
  export default Home; 