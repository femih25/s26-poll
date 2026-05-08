import DataDashboard from "../components/data-dashboard"

function NUIssues() {
    return (
    <div> 
    <h1>NU Issues</h1>

    <div id = 'all-results'>
      <h2 className = "sec-title">ALL RESULTS: NU ISSUES</h2>
      <DataDashboard pageKey="page-nu-issues" />
    </div>
    </div>
    ) 
  }
  
  export default NUIssues