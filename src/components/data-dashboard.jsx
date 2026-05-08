import { useState } from 'react';
import './data-dashboard.css';


const page_data = {
    "page-wellbeing":[
        {label: "wellbeing1", embed: null}, 
        {label: "SCREEN TIME", embed: "https://flo.uri.sh/visualisation/28858612/embed"},
        {label: "ALCOHOL", embed: "https://flo.uri.sh/visualisation/28856052/embed"},
        {label: "DRUGS", embed: "https://flo.uri.sh/visualisation/28859240/embed"},
        {label: "wellbeing5", embed: null},
    ], 
    "page-ai":[
        {label: "ai1", embed: null}, 
        {label: "ai2", embed: null},
        {label: "ai3", embed: null},
        {label: "ai4", embed: null},
        {label: "ai5", embed: null},
    ], 
    "page-sports":[
        {label: "ENGAGEMENT", embed: "https://flo.uri.sh/visualisation/28859190/embed"}, 
        {label: "ATTENDANCE", embed: "https://flo.uri.sh/visualisation/28859292/embed"},
        {label: "sports3", embed: null},
        {label: "sports4", embed: null},
        {label: "sports5", embed: null},
    ], 
    "page-jobs":[
        {label: "INTERNSHIPS", embed: "https://flo.uri.sh/visualisation/28860252/embed"}, 
        {label: "jobs2", embed: null},
        {label: "jobs3", embed: null},
        {label: "jobs4", embed: null},
        {label: "jobs5", embed: null},
    ],
    "page-nu-issues":[
        {label: "nu-issues1", embed: null}, 
        {label: "nu-issues2", embed: null},
        {label: "nu-issues3", embed: null},
        {label: "nu-issues4", embed: null},
        {label: "nu-issues5", embed: null},
    ], 
    "page-national-politics":[
        {label: "POLITICAL LEAN + TRUMP APPROVAL", embed: "https://dailydv.netlify.app/polling/yty.html"}, 
        {label: "LGBTQ+ POLITICAL LEAN", embed: "https://dailydv.netlify.app/polling/qp.html"},
        {label: "POLITICAL LEAN + ISLAMOPHOBIA/ANTISEMITISM", embed: "https://dailydv.netlify.app/polling/asip.html"},
        {label: "national-politics4", embed: null},
        {label: "national-politics5", embed: null},
    ]
}; 

export default function DataDashboard({pageKey}) {
    const categories = page_data[pageKey] ?? [];
    const [active, setActive] = useState(categories[0]?.label ?? null);

    const current = categories.find((c) => c.label === active);

    return (
        <div className={`data-root ${pageKey}`}>
          <div className="data-pill-grid">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActive(cat.label)}
                className={`data-pill ${cat.label === active ? "data-pill--active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="data-embed" key={active}>
          {current?.embed ? (
                    <iframe
                    src={current.embed}
                    title={active}
                    className="data-iframe"
                    style={{ height: current.height || 600 }}
                    allowFullScreen
                  />
                ) : (
                    <div className="data-placeholder">No embed yet for "{active}"</div>
                )}
            </div>
        </div>
    );
} 