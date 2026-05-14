import DataDashboard from "../components/data-dashboard"
import PageContent from "../components/page-content"
import { useEffect } from "react"
import StandoutStat from "../components/standout-stat"

function Sports() {
    useEffect(() => {
      document.body.classList.add('page-sports')
      return () => document.body.classList.remove('page-sports')
    }, [])

    return (
    <div className = 'page-sports'> 
    <div id = 'page-intro'> 
      <h2 className = "page-title">Dedicated Northwestern sports fans are the exception, not the norm, on campus</h2>
      <h3 className = "page-byline">Desiree Luo</h3>
      <p className = "intro-blurb">Big Ten athletic programs are a defining part of the Northwestern experience, or at least it appears that way. Singing the NU Fight Song under the glaring sun in Martin Stadium stands is a quintessential experience for nearly every first-year student at Wildcat Welcome. But after that initial football game, how much do NU students really want to “fight for victory?”   
      </p>
    </div> 

<StandoutStat
    shadowColor="#F0A94F"
  stats={[
    { above: null, stat: '23%', below: "of undergraduates say they have never attended an NU sporting event." },
    { above: 'More than', stat: '60%', below: 'of NU students said they either disagree or strongly disagree with the statement, “Northwestern sports are an important part of my college experience.' },
  ]}
  />


    <div id = 'sports-page-content'> 
        <PageContent pageKey="page-sports" />
    </div> 

    <div id = 'all-results'>
      <h2 className = "sec-title">MORE RESULTS</h2>
        <DataDashboard pageKey="page-sports" />
    </div>
    </div>
    ) 
  }
  
  export default Sports