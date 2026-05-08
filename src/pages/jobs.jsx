import DataDashboard from "../components/data-dashboard"

function Jobs() {
    return (
    <div> 
    <h1>Jobs</h1>

    <div id = 'all-results'>
      <h2 className = "sec-title">ALL RESULTS: JOBS</h2>
      <DataDashboard pageKey="page-jobs" />
    </div>
    </div>
    ) 
  }
  
  export default Jobs