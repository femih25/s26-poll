import { useEffect, useRef, useState } from 'react'
import scrollama from 'scrollama'
import './page-content.css'


/*Content for each page */
const page_content = {
    "page-wellbeing": [
        {
          title: "Frequent Drinking Is More Common Among Students Involved in Greek Life",
          text: [
            "Greek life has long played an integral role in some students’ college experience. According to Northwestern’s Division of Student Affairs, about 18% of the undergraduate student body is in a sorority or fraternity.",
            "Students involved in Greek life on campus reported drinking alcohol at substantially higher rates than their non-Greek peers. Out of students who say they never drink, only 7.8% are in Greek life.",
            "Respondents who drank alcohol more frequently were more likely to be involved in Greek life. Of respondents who reported drinking several times a week, nearly 63% are involved in Greek life."
          ],
          embed: null,
          height: 550,
        },
        {
          title: "First-Year Students Report Higher Social Satisfaction in Spring Than Fall",
          text: [
            "When first-year students arrive on campus in September, they spend their first few months adjusting to the new college environment, fostering relationships and finding their communities.",
            "Since the fall, the number of first-year respondents who reported that they were “very satisfied” with their social life at NU rose from 19.3% to 30.3% in the spring. At the same time, the number of students who said they were “somewhat satisfied” fell from 56.2% to 48.7%. The overall number of respondents that are satisfied has increased to 79%.",
            "Overall, the first-year student body is easing into their college experience, exploring friendships, extracurricular involvement and campus life as the year has progressed."
          ],
          embed: null,
          height: 500,
        },
      ],

    "page-ai": [
        {
          title: "TKTK",
          text: [
            "TKTK",
          ],
          embed: null,
          height: 550,
        },
        {
          title: "TKTK",
          text: [
            "TKTK",
          ],
          embed: null,
          height: 500,
        },
      ],

    "page-sports": [
        {
          title: "TKTK",
          text: [
            "TKTKT",
          ],
          embed: null,
          height: 550,
        },
        {
          title: "TKTK",
          text: [
            "TKTK",
          ],
          embed: null,
          height: 500,
        },
      ],

    "page-jobs": [
        {
          title: "Internship applications by year",
          text: [
            "Generally, juniors applied to more internships for this upcoming summer than any other year. More specifically, of the respondents who reported applying to over 100 internships, juniors made up 50.3%. First-year students were the least likely to apply to that many, with the reported portion sitting at just 0.7%. Sophomores made up the greatest portion of respondents that applied to between 41-100 internships at 42.4%.",
            "In contrast, seniors applied to the fewest number of summer internships. More than half of the students who reported applying to zero internships were seniors. While this could be due to the fact that most plan on full-time positions or graduate-level education, 14.4% of students that said they applied to more than 100 internships were seniors. First-year students made up the largest share of students that only applied to between one and 10 internships, at 35.9%. ", 
        ],
          embed: 'https://flo.uri.sh/visualisation/28874621/embed', 
          height: 550,
        },
        {
          title: "Summer plans by area of study",
          text: [
            "Plans for the summer vary far and wide, from paid internships to research at NU to travel, and 33.2% of students responded they are still searching for summer opportunities at the time of the poll. Given that 52.8% of respondents study humanities and social sciences, these students make up the majority of sections. Despite this, 44.4% of students planning on doing research at NU over the summer are studying life and physical sciences.",
            "No students studying journalism reported conducting research at NU over the summer at the time of the poll. Of all positions engineers are pursuing this summer, an industry-specific paid internship is the greatest, at 20%. Math, statistics, computer science or data science students follow close behind, making up 16.8% of students with a paid professional internship. ", 
        ],
          embed: 'https://flo.uri.sh/visualisation/28875771/embed',
          height: 500,
        },
        {
            title: "AI's impact",
            text: [
              "According to the Boston Consulting Group, artificial intelligence will reshape about half the jobs in the U.S. in some capacity within the next two to three years. Students soon to enter the workforce are concerned about its impact to varying degrees. More than 60% of students were not optimistic about how AI will impact their future job prospects to some degree.",
                "Journalism students were the most likely to strongly disagree that AI will have a positive impact on their field, with 45.7% sharing strongly pessimistic views. Humanities and social sciences students followed closely behind, at 42.9%. Life and physical sciences students were the most likely to be optimistic about AI’s impact to some degree, with 14.2% agreeing and 6.8% strongly agreeing with the statement.", 
            ],
            embed: 'https://flo.uri.sh/visualisation/28874793/embed',
            height: 550,
        },
        {
            title: "Job prospects and mental health",
            text: [
              "More than 60% of students are worried about their post-graduate job prospects, which further breaks down into 36.3% agreeing and 25.5% strongly agreeing when asked if they have concerns.",
                "Of the students who reported that the topic of careers negatively impacts their mental health, 76.6% strongly agreed that job prospects were a major concern. Conversely, of students that “strongly disagree” that future job prospects are a concern, 63.6% reported that their career positively contributes to their mental health. ",  
            ],
            embed: 'https://flo.uri.sh/visualisation/28875010/embed',
            height: 550,
        },
        {
            title: "The job market across political ideologies",
            text: [
              "While the NU student body is predominantly liberal, the campus still has some political diversity. However, across the political spectrum, most students were split over whether or not their post-college career path was influenced by the current job market. ",
                "Moderate and conservative students put more weight on the state of the job market than their left-leaning peers, with 45.1% agreeing that their career plans are influenced by the job market. In contrast, 49.9% of liberal and 46.5% of strongly liberal students agreed to some degree. Between 20%-25% across the political spectrum disagreed to some extent, not feeling influenced by the job market. "
            ],
            embed: 'https://flo.uri.sh/visualisation/28875289/embed',
            height: 550,
        },
      ],

    "page-nu-issues": [
        {
          title: "TKTK",
          text: [
            "TKTK",
          ],
          embed: null,
          height: 550,
        },
        {
          title: "TKTK",
          text: [
            "TKTK",
          ],
          embed: null,
          height: 500,
        },
      ],


    "page-national-politics": [
      {
        title: "Political lean and Trump approval",
        text: [
          "It’s overwhelming: Almost 80% of respondents identified as liberal, and more than 92% disapproved of President Donald Trump’s job performance thus far.",
          "Compared to past polls, there were some internal shifts within big-umbrella categories. Among self-identified left-wingers, respondents shifted more than 6 percentage points toward “very liberal” since the fall. And among those who disapproved of Trump’s job performance, respondents shifted nearly 4 points toward “somewhat disapprove” since last spring.",
          <>Though responses could appear contradictory, NU’s student body could be driven by more confident opinions of Trump after the president’s first year in the White House, or following {" "}
      <a href="https://dailynorthwestern.com/2025/11/28/campus/northwestern-strikes-deal-with-trump-administration-to-restore-federal-funding/">
        NU's agreement with the federal government
      </a>{" "} in November.
      </>,  
          "It could also be attributable to increasing news fatigue among young people, which a December Pew Research Center survey estimated affected 55% of American 18-to-29-year-olds.", 
        ],
        embed: "https://dailydv.netlify.app/polling/yty.html",
        height: 550,
      },
      {
        title: "Political lean in LGBTQ+ students",
        text: [
            <>LGBTQ+ students have been repeatedly targeted on the national stage. Multiple January 2025 executive orders targeted the LGBTQ+ community. One was later referenced in NU’s deal with the federal government to restore federal research funding, which included {" "}<a href="https://dailynorthwestern.com/2025/12/19/campus/northwestern-claims-the-federal-funding-deal-will-not-restrict-its-trans-community-students-worry-otherwise/">provisions</a>{" "}requiring the University to define individuals by their sex “at conception.</>,
          "It’s no surprise, then, that LGBTQ+ students play a significant political role on campus. Left-wing identification was 20 points higher among LGBTQ+ respondents. And among those self-described left-leaning students, LGBTQ+ respondents said they were “very liberal” nearly 27 points more than their non-LGBTQ+ peers.",
          "This progressivism sits alongside high political engagement, with almost 30% of LGBTQ+ respondents describing themselves as “very political” compared to more than 17% of their non-LGBTQ+ counterparts.", 
        ],
        embed: "https://dailydv.netlify.app/polling/qp.html",
        height: 450,
      },
      {
        title: "Views on presence of Islamophobia vs antisemitism on campus",
        text: [
          <>Allegations of antisemitism were a key part of federal investigations against NU following its response to the {" "}<a href = "https://dailynorthwestern.com/2025/04/29/campus/one-year-later-nu-reflects-on-pro-palestinian-encampment-that-changed-student-activism/">pro-Palestinian encampment in April 2024</a>{" "}as well as the Trump administration’s {" "}<a href = "https://dailynorthwestern.com/2025/04/10/campus/hhs-cites-incidents-of-antisemitism-in-confirmation-of-northwestern-funding-freeze-while-experts-question-legality/">eventual freeze</a>{" "} of federal funding. The discourse mellowed following the federal deal in November, when the University proclaimed that antisemitic incidents had “significantly declined” over the previous two years.</>,
          "Respondents across the political spectrum generally agreed that antisemitism was no longer “much of a problem” on campus. The same could not be said for Islamophobia, with political leaning shaping respondents’ view of prevalence greatly.",
          "A plurality of only self-described “very liberal” respondents considered Islamophobia a serious problem, including 16% that considered it a “very serious problem.” The more conservative respondents got, the more likely they were to call it “not much of a problem” — or “not a problem” at all.", 
        ],
        embed: "https://dailydv.netlify.app/polling/asip.html",
        height: 500,
      },
      {
        title: "Reactions to campus immigration policy",
        text: [
          <>NU’s response policies to federal immigration enforcement, including ICE, have hardly been publicly elaborated. April 2025 guidance advised students to call NU police if approached by a federal officer. When The Daily asked interim President Henry Bienen whether a response plan existed in {" "}<a href = "https://dailynorthwestern.com/2026/01/12/lateststories/bienen-talks-federal-funding-deal-immigration-enforcement-in-interview-with-the-daily/">January,</a> {" "} he responded, “Good question that I don’t know the answer to.”</>,
          "Nearly a quarter of respondents said they had no opinion on the policies, or lack thereof. Split by race, students who only self-identified as white drove that statistic, with almost 28% having no opinion, compared to more than 12% of Hispanic and Latino respondents.", 
          "While varied, respondents from all groups generally skewed negative toward the policies. Almost 47% of opinionated respondents said they were least somewhat insufficient, as well as just over half of opinionated respondents who strongly disapproved of the current actions of federal immigration enforcement.", 
        ],
        embed: "https://dailydv.netlify.app/polling/ir.html",
        height: 795,
      },
    ], 
}; 







export default function PageContent({ pageKey }) {
    const sections = page_content[pageKey] ?? [] 
    const [activeIndex, setActiveIndex] = useState(0)
    const scroller = useRef(null)
    const [opacity, setOpacity] = useState(1)
    const [currentEmbed, setCurrentEmbed] = useState(sections[0]?.embed)
    const [currentHeight, setCurrentHeight] = useState(sections[0]?.height || 500)

    const handleStepEnter = ({ index }) => {
        if (index === activeIndex) return
        setOpacity(0)
        setTimeout(() => {
          setActiveIndex(index)
          setCurrentEmbed(sections[index]?.embed)
          setCurrentHeight(sections[index]?.height || 500)
          setOpacity(1)
        }, 400)
      }

      const handleStepExit = ({ index, direction }) => {
        if (direction === 'down') return  // handled by onStepEnter
        const prevIndex = index - 1
        if (prevIndex < 0) return
        setOpacity(0)
        setTimeout(() => {
          setActiveIndex(prevIndex)
          setCurrentEmbed(sections[prevIndex]?.embed)
          setCurrentHeight(sections[prevIndex]?.height || 500)
          setOpacity(1)
        }, 400)
      }

  useEffect(() => {
    scroller.current = scrollama()
    scroller.current
      .setup({ step: '.scrolly-step', offset: .95 })
      .onStepEnter(handleStepEnter)
       .onStepExit(handleStepExit)

return () => scroller.current.destroy()
  }, [])

  const active = sections[activeIndex]

  return (
    <div className="page-content-container">

      <div className="dv-col">
        <div className="dv-box"
          style={{
            opacity: opacity,
            transition: 'opacity 800ms ease'
          }} 
          >
          {currentEmbed ? (
            <iframe
              key={activeIndex}
              src={currentEmbed}
              title={`dv-${activeIndex}`}
              className="scrolly-iframe"
              style={{ height: currentHeight || 500 }}
              allowFullScreen
            />
          ) : (
            <div className="scrolly-dv-placeholder">
              No embed yet for this section
            </div>
          )}
        </div>
      </div>

      <div className="scrolly-text-col">
        {sections.map((section, i) => (
          <div
            key={i}
            className={`scrolly-step scrolly-text-box ${i === activeIndex ? 'scrolly-text-box--active' : ''}`}
          >
            {section.title && <h3 className="scrolly-section-title">{section.title}</h3>}
            {Array.isArray(section.text)
              ? section.text.map((para, j) => <p key={j}>{para}</p>)
              : <p>{section.text}</p>
            }
          </div>
        ))}
      </div>

    </div>
  )
} 