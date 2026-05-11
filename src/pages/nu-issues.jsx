import DataDashboard from "../components/data-dashboard"

function NUIssues() {
    return (
    <div> 
      <div id = 'page-intro'> 
      <h2 className = "page-title">Northwestern students divided on campus issues from funding deal to presidency</h2>
      <h3 className = "page-byline">Ashley Wei and Ruixin Zhang</h3>
      <p className = "intro-blurb">This academic year, students have seen a shift in the presidency, the end of the federal funding freeze and its lasting impact. . 
      </p>
    </div> 

    <div id = 'all-results'>
      <h2 className = "sec-title">MORE RESULTS</h2>
      <DataDashboard pageKey="page-nu-issues" />
    </div>
    </div>
    ) 
  }
  
  export default NUIssues