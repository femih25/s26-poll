import DataDashboard from "../components/data-dashboard"
import PageContent from "../components/page-content"
import { useEffect } from "react"

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

    <div style = {{display: 'flex', textAlign: 'center', gridTemplateColumns: '1fr 1fr 1 fr'}}>
      <p style={{fontFamily: "'Londrina Solid', sans-serif", fontSize: '35px'}}>
        Nearly a quarter of undergraduates say they have never attended an NU sporting event.</p>
      <p style={{fontFamily: "'Londrina Solid', sans-serif", fontSize: '35px'}}>
        More than 60% of NU students said they either disagree or strongly disagree with the statement, “Northwestern sports are an important part of my college experience.”</p>
    </div>

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