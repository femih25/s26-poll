import DataDashboard from "../components/data-dashboard"
import PageContent from "../components/page-content"
import { useEffect } from "react"
import StandoutStat from "../components/standout-stat"


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

    <StandoutStat
            shadowColor=" #a0a972"
              stats={[
                { above: "Out of those who never drink, only", stat: "7.8%", below: "are in Greek life" },
                { above: "Of students on financial aid,", stat: "47.6%", below: "said finances contribute negatively to their well-being" }
              ]}
            />


<div className='maps'>
  <div className='sb-map'>
    <h2 className='map-title'>Where do students spend Spring Break?</h2>
    <iframe className="wellbeing-map" src="https://flo.uri.sh/visualisation/28947749/embed" width="100%" allowFullScreen></iframe>
  </div>
  <div className='cry-map'>
    <h2 className='map-title'>Willard, Allison, Schapiro, Tech among top last-cry locations for students</h2>
    <p className='map-subtitle'>Undergraduates were asked: "Where on Northwestern's campus did you last cry?"</p>
    <img src='/s26poll/cry-map.jpg' alt='map of crying locations'/>
    <p className='map-caption'>Source: The Daily Spring 2026 Poll. n = 319 (Graphic by Ryan Ottignon) <br/>
    Note: Data is unweighted.</p>
  </div>
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