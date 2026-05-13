import DataDashboard from "../components/data-dashboard"
import { useEffect } from "react"

function Sports() {
    useEffect(() => {
      document.body.classList.add('page-sports')
      return () => document.body.classList.remove('page-sports')
    }, [])

    return (
    <div> 
    <h1>Sports</h1>

    <div id = 'all-results'>
      <h2 className = "sec-title">ALL RESULTS: SPORTS</h2>
        <DataDashboard pageKey="page-sports" />
    </div>
    </div>
    ) 
  }
  
  export default Sports