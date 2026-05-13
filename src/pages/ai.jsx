import DataDashboard from "../components/data-dashboard"
import { useEffect } from "react"
import PageContent from "../components/page-content"

function AI() {
  useEffect(() => {
    document.body.classList.add('page-ai')
    return () => document.body.classList.remove('page-ai')
  }, [])

    return (
    <div> 
      <div id = 'page-intro'> 
      <h2 className = "page-title">Students express concerns over AI’s impact on society, job markets</h2>
      <h3 className = "page-byline">Marissa Fernandez and Taariq Ahmed</h3>
      <p className = "intro-blurb">AI has become increasingly integrated into people’s daily lives for everything from generating images to summarizing Google results. NU students’ opinions on AI have also grown more negative as it becomes more popular. Differences in years, majors and political ideologies seem to divide undergraduates on the impacts of AI.  
      </p>
    </div> 

        <div id = 'ai-page-content'> 
          <PageContent pageKey="page-ai" />
        </div> 

    <div id = 'all-results'>
      <h2 className = "sec-title">MORE RESULTS:</h2>
      <DataDashboard pageKey="page-ai" />
    </div>

    </div>
    ) 
  }
  
  export default AI