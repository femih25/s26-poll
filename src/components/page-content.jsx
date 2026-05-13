import { useEffect, useRef, useState } from 'react'
import scrollama from 'scrollama'
import './page-content.css'


/*Content for each page */
const page_content = {
    "page-wellbeing": [
        {
          title: "Drinking among students in Greek life",
          text: [
            "Greek life has long played an integral role in some students’ college experience. According to Northwestern’s Division of Student Affairs, about 18% of the undergraduate student body is in a sorority or fraternity.",
            "Students involved in Greek life on campus reported drinking alcohol at substantially higher rates than their non-Greek peers. Out of students who say they never drink, only 7.8% are in Greek life.",
            "Respondents who drank alcohol more frequently were more likely to be involved in Greek life. Of respondents who reported drinking several times a week, nearly 63% are involved in Greek life."
          ],
          embed: 'https://flo.uri.sh/visualisation/28859711/embed',
          height: 550,
        },
        {
          title: "First-years' social satisfaction in spring vs fall",
          text: [
            "When first-year students arrive on campus in September, they spend their first few months adjusting to the new college environment, fostering relationships and finding their communities.",
            "Since the fall, the number of first-year respondents who reported that they were “very satisfied” with their social life at NU rose from 19.3% to 30.3% in the spring. At the same time, the number of students who said they were “somewhat satisfied” fell from 56.2% to 48.7%. The overall number of respondents that are satisfied has increased to 79%.",
            "Overall, the first-year student body is easing into their college experience, exploring friendships, extracurricular involvement and campus life as the year has progressed."
          ],
          embed: 'https://flo.uri.sh/visualisation/28875954/embed',
          height: 500,
        },
        {
          title: 'Social satisfaction and screen time', 
          text: [
            "Despite differences in reported amount of  time spent on their phone, respondents indicate similar levels of social satisfaction at NU. About 80% of respondents who said they spent six to eight hours on their phones said they were satisfied with their social lives at NU, just more than 2% lower than respondents that spend less than four to six hours on their phones.", 
            "Another surprise was that the people who spent eight or more hours on their phones beat out the other phone screen time categories in the “very satisfied” category by a small margin, with all breakdowns falling within four percentage points between each other. Again, though the margin was very small, it defies expectations.",
            "Sophomores are the most likely to be very unsatisfied with their social lives at about 30% and both sophomores and seniors spend the most time on their phones."
          ], 
          embed: 'https://flo.uri.sh/visualisation/28879164/embed',
          height: 500 
        }, 
        {
          title: 'Financial aid and well-being', 
          text: [
            "According to Northwestern Admissions, 60% of NU students receive financial aid, claiming that the University meets “100% of every student’s demonstrated financial need.” Additionally, about 20% of first-year students are eligible for federal Pell Grants. Undergraduates who receive financial aid say that finances are one of their major stressors. Nearly half of respondents on financial aid reported that finances contribute negatively to their well-being.",
            "In contrast, students who do not receive financial aid are substantially more likely to be stress-free when it comes to finances, with 68.9% reporting no impact.", 
            "Out of all respondents, 59% said that finances have no impact on their well-being."
          ], 
          embed: 'https://flo.uri.sh/visualisation/28856199/embed', 
          height: 500 
        }
      ],

    "page-ai": [
        {
          title: "Effects on education",
          text: [
            "Over the last year, students have developed a more negative perspective on AI’s impact on their education.",
            "", 
            "In Spring 2025, 31.6% of respondents agreed that AI made them a better student, of which 11.1% strongly agreed with the statement.", 
            "This year, 62.1% of undergraduates indicated their disagreement, a 27.4% uptick from last year.",
            <>These results come as some {""}<a href = "https://dailynorthwestern.com/2026/05/05/campus/some-northwestern-professors-give-exams-more-weight-in-grades-due-to-student-ai-usage/">NU classes increase the weight of exams</a>{""} to discourage AI usage and as the school begins to {""}<a href = "https://dailynorthwestern.com/2026/03/10/campus/northwestern-announces-new-ai-major-beginning-fall-2026/">offer an Al major.</a> Moreover, a Lumina Foundation-Gallup study found that more than half of the college students surveyed use AI on class work at least once a week."</>
          ],
          embed: 'https://flo.uri.sh/visualisation/28878747/embed',
          height: 550,
        },
        {
          title: "Academic growth",
          text: [
            "A majority of students across all years disagreed that artificial intelligence is beneficial to their educational development.",
            "Almost half of seniors strongly disagreed with the statement, far exceeding any other grade. About 30% of sophomores disagreed and approximately the same proportion strongly disagreed, while juniors reflected similar patterns.", 
            "Still, a smaller number of students across all years agreed with the statement. More than 20% of sophomores agreed, with juniors close behind, followed by seniors and first-years at about 15% each. Strong agreement remained very low across all years, at 5% for first-years and about 3% for the other groups.",
            "A moderate share of students neither agreed nor disagreed, including 22% of first-years, nearly 20% of juniors, 15% of sophomores and 13% of seniors.",
          ],
          embed: 'https://flo.uri.sh/visualisation/28901072/embed',
          height: 500,
        },
        {
          title: "Professional impacts",
          text: [
            "Humanities and social sciences students make up 52.8% of respondents for the entire Spring 2026 Poll, which accounts for its large representation in the question response visualization.", 
            "Still, humanities and social sciences majors account for much more of the proportion that disagreed or strongly disagreed that AI gives them a positive outlook on their future career, compared to their portion of individuals that agreed with the statement.", 
            "Life and physical sciences majors made up 28.9% of students that agreed with the statement, compared to its proportion in other categories that hover between 14 to 17%. Math, computer science, statistics and data science majors, on the other hand, posted nearly identical numbers. Engineering majors followed a similar trend.", 
            "The degree of agreement varied between groups. Humanities majors accounted for just under 33% of those who agreed or strongly agreed, and life and physical sciences majors were only two percent behind."
          ],
          embed: 'https://flo.uri.sh/visualisation/28911208/embed',
          height: 750,
        },
        {
          title: "Concerns by political leaning",
          text: [
            "At a national level, Democrats and Republicans seemed united in their concerns about AI, according to a recent poll by NBC News. Yet, NU students do not seem to be following this particular trend.", 
            "Among those who self-identified as moderate or conservative, 50.9% of them agreed that AI will impact their future career. In this group, 18.3% of respondents “strongly agreed.”", 
            "Of those who identified themselves as very liberal, 32.9% disagreed with the statement. Another 33.8% “strongly disagreed” with the statement.", 
            "Students who identified themselves as liberal landed in the middle. About 36% of them reported neither agreeing or disagreeing with the statement.", 
          ],
          embed: 'https://flo.uri.sh/visualisation/28877588/embed', 
          height: 600, 
        }
      ],

    "page-sports": [
        {
          title: "Years and sports attendance",
          text: [
            "There may be an answer to the question of why Welsh-Ryan Arena’s student section is often sparsely populated. Nearly a quarter of undergraduates said they have never attended an NU sporting event, and 22.6% said they only attend NU sporting events once a year. Still, the avid fan does exist: About 6% reported attending NU sporting events more than six times per quarter.",
            "When it comes to the students who have yet to experience a game at Martin Stadium or Welsh-Ryan, NU’s newest and oldest classes have the most. About 30% of first-years say they have never attended an NU sporting event — but so do about a quarter of the seniors."
          ],
          embed: 'https://flo.uri.sh/visualisation/28879091/embed',
          height: 550,
        },
        {
          title: "Gender and sports engagement",
          text: [
            "U! Rah! Rah!? More like U! Nah! Nah!, at least for more than 60% of NU students, who said they either disagree or strongly disagree with the statement “Northwestern sports are an important part of my college experience.” Only about a quarter of NU students said they agree, and 13.9% felt neutral about the statement.",
            "A similar proportion of men and women reported agreeing with that statement, with men surpassing women by only 5.3%. The proportion of both gender categories who reported feeling in the middle are both about 15%. Even the proportions of respondents who “strongly disagree” are nearly neck and neck, with just less than 31% for women and just less than 32% for men."
          ],
          embed: 'https://flo.uri.sh/visualisation/28879218/embed',
          height: 500,
        },
        {
          title: "Area of study and sports attendance",
          text: [
            "Looking at areas of study, journalism students seem to frequent sporting events most often, with about 44.5% reporting that they attend sporting events two or more times per quarter. Trailing by a hair are students studying math, computer science, statistics or data science.",
            "On the other end, students studying performing and visual arts have the highest percentage reporting that they never attend sporting events at nearly 40%. Just more than a quarter of them say they attend one sporting event per year. The next highest percentage of students who report never attending a sporting event are those studying engineering, at around 25%."
          ],
          embed: 'https://flo.uri.sh/visualisation/28902147/embed',
          height: 550,
        },
        {
          title: "Sports type",
          text: [
            "Responding to which types of NU sports they have watched in person, about 65% selected football and about 55% selected men’s basketball. The next most-selected sport is women’s volleyball, at about 30%.",
            "All three of these sports are accessible via a walk to Martin Stadium or a bus ride to Welsh-Ryan. Sports located off campus don’t have the same fortune. Namely, women’s golf, women’s cross country, men’s golf and women’s indoor track collectively made up less than 1% of selections."
          ],
          embed: 'https://flo.uri.sh/visualisation/28941036/embed',
          height: 750,
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
          title: "Who supports the funding deal?",
          text: [
            <>Following a $790 million funding freeze, NU struck an agreement on Nov. 28 with the Trump administration to {""}<a href = "https://dailynorthwestern.com/2025/11/28/campus/northwestern-strikes-deal-with-trump-administration-to-restore-federal-funding/">restore federal research funding</a>{""} and end federal investigations into the University.</>, 
            "NU agreed to pay $75 million to the federal government, terminated the Deering Meadow Agreement, increased policies to combat antisemitism and updated faculty hiring policies.", 
            <>NU joined {""}<a href = "https://dailynorthwestern.com/2025/11/29/campus/the-daily-explains-how-northwesterns-deal-compares-to-other-university-agreements-with-trump-administration/">five other higher education institutions,</a> including the University of Pennsylvania and Columbia University, in striking a deal to restore federal funding.</>, 
            "Support for the deal varied across students’ political leanings. Of moderate and conservative students, 60.3% supported the deal, as compared to 30.5% of “liberal” students and 10.5% of “very liberal” students.", 
          ],
          embed: 'https://flo.uri.sh/visualisation/28876441/embed',
          height: 550,
        },
        {
          title: "Impact of NU's next president",
          text: [
            "Following the resignation of former President Michael Schill in early September, Bienen took the reins in an interim capacity. The Presidential Search Committee is now seeking Bienen’s successor, with a decision projected for this spring.",
            "The anticipation and expectation for the next president’s actions dwindle as students progress through their academic years. Only 25.8% of seniors believe the next president’s decisions will impact the undergraduate student experience, compared to 49.9% of first-year students.", 
            "Both Schill and Bienen have been navigating an unusually turbulent higher education landscape, but the primary tension with the federal government, research funding and federal investigations, has stopped. Now, students could be anticipating the way the next president deals with the aftermath and how it might impact their NU experience.", 
          ],
          embed: 'https://flo.uri.sh/visualisation/28877577/embed',
          height: 500,
        },
        {
          title: 'Antisemitism in 2025 vs 2026',
          text: [
            "Jewish students are substantially more likely to personally experience or know someone who experienced antisemitism on campus. There is a 48.4% gap between Jewish and non-Jewish respondents. This is an increase from the 44% gap in the poll one year ago.", 
            "About 66% of Jewish students responded ‘Yes’ to this poll question, an 8.4% increase from last spring.", 
            "Twenty-three percent of Jewish students were also more likely to support the federal deal than non-Jewish students.", 
            "These responses come at a crucial time as more higher education institutions are under scrutiny for their treatment of Jewish students." 

          ], 
          embed: 'https://flo.uri.sh/visualisation/28878793/embed', 
          height: 550, 
        }
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
    const [opacity, setOpacity] = useState(1)
    const [currentEmbed, setCurrentEmbed] = useState(sections[0]?.embed)
    const [currentHeight, setCurrentHeight] = useState(sections[0]?.height || 500)
    const activeIndexRef = useRef(0)

      useEffect(() => {
        const downScroller = scrollama()
        const upScroller = scrollama()
      
        downScroller
          .setup({ step: '.scrolly-step', offset: 0.85 })
          .onStepEnter(({ index, direction }) => {
            if (direction !== 'down') return
            if (index === activeIndexRef.current) return
            activeIndexRef.current = index
            setOpacity(0)
            setTimeout(() => {
              setActiveIndex(index)
              setCurrentEmbed(sections[index]?.embed)
              setCurrentHeight(sections[index]?.height || 500)
              setOpacity(1)
            }, 400)
          })
      
        upScroller
          .setup({ step: '.scrolly-step', offset: 0.15 })
          .onStepEnter(({ index, direction }) => {
            if (direction !== 'up') return
            if (index === activeIndexRef.current) return
            activeIndexRef.current = index
            setOpacity(0)
            setTimeout(() => {
              setActiveIndex(index)
              setCurrentEmbed(sections[index]?.embed)
              setCurrentHeight(sections[index]?.height || 500)
              setOpacity(1)
            }, 400)
          })
      
        return () => {
          downScroller.destroy()
          upScroller.destroy()
        }
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
      {section.embed && (
        <iframe
          src={section.embed}
          title={`mobile-dv-${i}`}
          className="mobile-embed"
          height={section.height || 500}
          allowFullScreen
        />
      )}
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