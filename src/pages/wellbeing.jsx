import DataDashboard from "../components/data-dashboard"
import { useEffect } from "react"


function Wellbeing() {
  useEffect(() => {
    document.body.classList.add('page-wellbeing')
    return () => document.body.classList.remove('page-wellbeing')
  }, [])

    return (
    <div> 
    <div id = 'page-intro'> 
      <h2 className = "page-title">Wildcats are wilding out: Greek life, stress and more </h2>
      <h3 className = "page-byline">Caroline Altschul and Cydney Waterman</h3>
      <p className = "intro-blurb">For college undergraduates, well-being can hang in the balance as students navigate academics, relationships and new environments. Factors like alcohol consumption, financial stress and social satisfaction do more than just shape daily life. They can play a large role in determining the student experience.
      </p>
    </div> 
    <div style = {{
      border: '2px solid #858864',
      padding: '20px', 
      width: '500px',
      height: '400px',
      backgroundColor: '#C4C992',
      display: 'flex',
      margin: '0 auto', 
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center', 
      marginTop: '20px', 
      borderRadius: '20px'
    }}>
      cry map
    </div>
    <div style = {{
      display: 'grid', 
      textAlign: 'center',
      marginTop: '20px',
      gridTemplateColumns: '1fr 1fr 1fr',
    }}>
      <p style = {{
        fontFamily: "'Londrina Solid', sans-serif",
        fontSize: '35px'
      }}>Out of those who never drink, only 7.8% are in Greek life.</p>
      <p style = {{
        fontFamily: "'Londrina Solid', sans-serif",
        fontSize: '35px'
      }}>Social satisfaction is equal across screen times. </p>
      <p style = {{
        fontFamily: "'Londrina Solid', sans-serif",
        fontSize: '35px'
      }}>Of students on financial aid, 47.6% said finances contribute negatively to their well-being.</p>
    </div>
    <div style = {{
      border: '2px solid #858864',
      padding: '20px', 
      width: '500px',
      height: '400px',
      backgroundColor: '#C4C992',
      display: 'flex',
      margin: '0 auto', 
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center', 
      marginTop: '20px', 
      borderRadius: '20px'
    }}>
      spring break map
    </div>
    <h2 className = "sec-title">ALL RESULTS: WELL-BEING</h2>
    <DataDashboard pageKey="page-wellbeing" />
    </div>
    ) 
  }
  
  export default Wellbeing