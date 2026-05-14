import DataDashboard from "../components/data-dashboard"
import { useEffect, useState } from "react"
import PageContent from "../components/page-content"
import StandoutStat from "../components/standout-stat"
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
      <p className = "intro-blurb">This academic year, students have seen a shift in the presidency, the end of the federal funding freeze and its lasting impact. 
      </p>
    </div> 

    <StandoutStat
    shadowColor="rgba(112, 82, 148, 0.66)" 
  stats={[
    { above: 'More than', stat: '50%', below: "of Northwestern’s student body said it wasn’t familiar with interim President Henry Bienen’s actions." },
    { above: null, stat: '40.1%', below: 'of students believe the decisions made by the next president will impact their college experience. ' },
  ]}
  />

    <div className="deering-box" style={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
    <img src="gfx/deering.webp" alt="Click to open" />
    <h2 className="deering-box-text">Click to see student perspectives on Northwestern's funding deal</h2>
      </div>

      {open && (
        <div className="popup-overlay" onClick={() => setOpen(false)}>
          <div className="popup-box" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setOpen(false)}>✕</button>
            <iframe src="/s26poll/scrollytelling.html" title="Perspectives" />
          </div>
        </div>
      )}

    <div id = 'nu-issues-page-content'>
        <PageContent pageKey="page-nu-issues" />
    </div>

    <div id = 'all-results'>
      <h2 className = "sec-title">MORE RESULTS</h2>
      <DataDashboard pageKey="page-nu-issues" />
    </div>
    </div>
    ) 
  }
  
  export default NUIssues