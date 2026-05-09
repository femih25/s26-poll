import DataDashboard from "../components/data-dashboard"


function Wellbeing() {
    return (
    <div> 
    <h1>Well-Being</h1>
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
        fontSize: '50px'
      }}>STAT1</p>
      <p style = {{
        fontFamily: "'Londrina Solid', sans-serif",
        fontSize: '50px'
      }}>STAT2</p>
      <p style = {{
        fontFamily: "'Londrina Solid', sans-serif",
        fontSize: '50px'
      }}>STAT3</p>
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