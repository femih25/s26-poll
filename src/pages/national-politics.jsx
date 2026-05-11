import DataDashboard from "../components/data-dashboard"
import PageContent from "../components/page-content"

function NationalPolitics() {
    return (
    <div> 
    <div id = 'page-intro'> 
      <h2 className = "page-title">Immigration enforcement disapproval, high liberalism underscore national politics trends</h2>
      <h3 className = "page-byline">Ryan Ottignon</h3>
      <p className = "intro-blurb">Northwestern has long been a left-leaning university, and students in recent years have repeatedly fought with 
      the federal government — and University administration as a proxy — over divisive national issues. <br></br> <br></br> Some of those issues, like the
      war in Iran, may be indicators of how liberal the student body has stayed. But others, like the federal immigration enforcement blitz on the 
        Chicago area that began in the fall, speak directly to local and University policy.
      </p>
    </div> 

    <div id = 'natpol-page-content'> 
      <PageContent pageKey="page-national-politics" />
    </div> 

    <div id = 'all-results'>
      <h2 className = "sec-title">MORE RESULTS</h2>
      <DataDashboard pageKey="page-national-politics" />
    </div>
    </div>
    ) 
  }
  
  export default NationalPolitics