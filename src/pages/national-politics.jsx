import DataDashboard from "../components/data-dashboard"

function NationalPolitics() {
    return (
    <div> 
    <h1>National Politics</h1>

    <div id = 'all-results'>
      <h2 className = "sec-title">ALL RESULTS: NATIONAL POLITICS</h2>
      <DataDashboard pageKey="page-national-politics" />
    </div>
    </div>
    ) 
  }
  
  export default NationalPolitics