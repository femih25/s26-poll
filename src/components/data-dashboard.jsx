import { useState } from 'react';
import './data-dashboard.css';


const page_data = {
    "page-wellbeing":[
        {label: "WELL-BEING", embed: "https://flo.uri.sh/visualisation/28860811/embed"}, 
        {label: "SCREEN TIME", embed: "https://flo.uri.sh/visualisation/28858612/embed"},
        {label: "ALCOHOL", embed: "https://flo.uri.sh/visualisation/28856052/embed"},
        {label: "DRUGS", embed: "https://flo.uri.sh/visualisation/28859240/embed"},
        {label: "SOCIAL SATISFACTION", embed: "https://flo.uri.sh/visualisation/28912325/embed"},
        {label: "NU SATISFACTION", embed: "https://flo.uri.sh/visualisation/28912548/embed"},
    ], 
    "page-ai":[
        {label: "IMPACT ON ACADEMICS", embed: "https://flo.uri.sh/visualisation/28912303/embed"}, 
        {label: "IMPACT ON SOCIETY", embed: "https://flo.uri.sh/visualisation/28912576/embed"},
        {label: "IMPACT ON CAREERS", embed: "https://flo.uri.sh/visualisation/28912941/embed"},
    ], 
    "page-sports":[
        {label: "ENGAGEMENT", embed: "https://flo.uri.sh/visualisation/28859190/embed"}, 
        {label: "ATTENDANCE", embed: "https://flo.uri.sh/visualisation/28859292/embed"},
        {label: "SPORT POPULARITY", embed: "https://flo.uri.sh/visualisation/28941036/embed"},
        {label: "sports4", embed: null},
        {label: "sports5", embed: null},
    ], 
    "page-jobs":[
        {label: "CONCERNS", embed: "https://flo.uri.sh/visualisation/28872882/embed"}, 
        {label: "APPLICATIONS", embed: "https://flo.uri.sh/visualisation/28860252/embed"},
        {label: "SUMMER PLANS", embed: "https://flo.uri.sh/visualisation/28860416/embed"},
        {label: "JOB MARKET", embed: "https://flo.uri.sh/visualisation/28873879/embed"},
    ],
    "page-nu-issues":[
        {label: "ISLAMOPHOBIA PERCEPTION", embed: "https://flo.uri.sh/visualisation/28912975/embed"}, 
        {label: "ISLAMOPHOBIA EXPERIENCE", embed: "https://flo.uri.sh/visualisation/28913208/embed"},
        {label: "nu-issues3", embed: null},
        {label: "nu-issues4", embed: null},
        {label: "nu-issues5", embed: null},
    ], 
    "page-national-politics":[
        {label: "POLITICAL LEANING", embed: "https://flo.uri.sh/visualisation/28930603/embed"}, 
        {label: "POLITICAL INTENSITY", embed: "https://flo.uri.sh/visualisation/28930730/embed"},
        {label: "TRUMP APPROVAL", embed: "https://flo.uri.sh/visualisation/28930803/embed"},
        {label: "WAR IN IRAN", embed: "https://flo.uri.sh/visualisation/28930867/embed"},
        {label: "ICE", embed: "https://flo.uri.sh/visualisation/28930893/embed"},
        {label: "NU IMMIGRATION POLICIES", embed: "https://flo.uri.sh/visualisation/28930978/embed"},
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
                    style={{ height: current.height || 700 }}
                    allowFullScreen
                  />
                ) : (
                    <div className="data-placeholder">No embed yet for "{active}"</div>
                )}
            </div>
        </div>
    );
} 