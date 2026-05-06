import { useState } from 'react';
import './story-card.css'

function StoryCard({ title, photo, icon, link }) {
    const [hovered, setHovered] = useState(false)

    return (
      <a
            href={link}
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security for external links
            className="story-card-link"
            style={{ textDecoration: 'none', color: 'inherit' }}
        >

    <div className="story-card-grid"
    style={{
        transform: hovered ? 'scale(1.03)' : 'scale(1)',
        transition: 'transform 0.2s ease',
      }}

    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}>
      <div className="story-card">
      <img src={photo} className="story-photo" />
      <div className="story-icon">{icon}</div>
      <div className="story-title">
        <h3>{title}</h3>
      </div>
    </div>
    </div>
    </a>
    );
} 

export default StoryCard;