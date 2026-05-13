import DataDashboard from "../components/data-dashboard"
import { useEffect, useState } from "react"

function NUIssues() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.classList.add('page-nu-issues')
    return () => document.body.classList.remove('page-nu-issues')
  }, [])
  
    return (

    <div> 
      <div id = 'page-intro'> 
      <h2 className = "page-title">Northwestern students divided on campus issues from funding deal to presidency</h2>
      <h3 className = "page-byline">Ashley Wei and Ruixin Zhang</h3>
      <p className = "intro-blurb">This academic year, students have seen a shift in the presidency, the end of the federal funding freeze and its lasting impact. . 
      </p>
    </div> 

    <h2 className="sec-title" style={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
        Click here for student perspectives on Northwestern's funding deal
      </h2>

      {open && (
        <div className="popup-overlay" onClick={() => setOpen(false)}>
          <div className="popup-box" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setOpen(false)}>✕</button>
            <iframe src="/scrollytelling.html" title="Perspectives" />
          </div>
        </div>
      )}

    <div id = 'all-results'>
      <h2 className = "sec-title">MORE RESULTS</h2>
      <DataDashboard pageKey="page-nu-issues" />
    </div>
    </div>
    ) 
  }
  
  export default NUIssues