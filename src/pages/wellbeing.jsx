import DataDashboard from "../components/data-dashboard"
import PageContent from "../components/page-content"
import { useEffect } from "react"


function Wellbeing() {
  useEffect(() => {
    document.body.classList.add('page-wellbeing')
    return () => document.body.classList.remove('page-wellbeing')
  }, [])

    return (
    <div> 
    <div id = 'page-intro'> 
      <h2 className = "page-title">Wildcats are wilding out: Greek life, stress and more </h2>
      <h3 className = "page-byline">Caroline Altschul and Cydney Waterman</h3>
      <p className = "intro-blurb">For college undergraduates, well-being can hang in the balance as students navigate academics, relationships and new environments. Factors like alcohol consumption, financial stress and social satisfaction do more than just shape daily life. They can play a large role in determining the student experience.
      </p>
    </div> 


    

    <div id = 'wellbeing-page-content'> 
        <PageContent pageKey="page-wellbeing" />
    </div> 

    <div>
    <h2 className = "sec-title">MORE RESULTS</h2>
    <DataDashboard pageKey="page-wellbeing" />
    </div>

    </div> 
    ) 
  }
  
  export default Wellbeing