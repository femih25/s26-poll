import DataDashboard from "../components/data-dashboard"

function AI() {
    return (
    <div> 
    <h1>Artificial Intelligence</h1>

    <div id = 'all-results'>
      <h2 className = "sec-title">ALL RESULTS: AI</h2>
      <DataDashboard pageKey="page-ai" />
    </div>

    </div>
    ) 
  }
  
  export default AI