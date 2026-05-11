import DataDashboard from "../components/data-dashboard"
import PageContent from "../components/page-content"

function Jobs() {
    return (
    <div> 
    <div id = 'page-intro'> 
      <h2 className = "page-title">Students anticipate summer plans, navigate an uncertain job market</h2>
      <h3 className = "page-byline">Grace Sharma</h3>
      <p className = "intro-blurb">It’s no secret that Northwestern students are driven by their career goals as they put together summer plans and worry over internship applications. Numerous factors can come into play, from a student’s area of study to concerns about artificial intelligence’s impact on their career. Regardless of major or interests, summer plans and career paths are a vital part of every NU student’s academic journey. 
      </p>
    </div> 

        <div id = 'jobs-page-content'> 
          <PageContent pageKey="page-jobs" />
        </div> 

    <div id = 'all-results'>
      <h2 className = "sec-title">MORE RESULTS</h2>
      <DataDashboard pageKey="page-jobs" />
    </div>
    </div>
    ) 
  }
  
  export default Jobs