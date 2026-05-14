

function StatBlock({ above, stat, below, shadowColor }) {
    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <p className="above-stat">{above}</p>
        <h1 className="stat" style={{ textShadow: `4px 4px 0px ${shadowColor}` }}>{stat}</h1>
        <p className="below-stat">{below}</p>
      </div>
    );
  }
  
  export default function StandoutStat({ stats, shadowColor = '#e6c05a' }) {
    return (
      <div id="double-standout-stat">
        {stats.map((s, i) => (
          <StatBlock key={i} above={s.above} stat={s.stat} below={s.below} shadowColor={shadowColor} />
        ))}
      </div>
    );
  }