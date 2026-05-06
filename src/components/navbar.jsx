import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'



function Navbar(){
    const [dropdownOpen, setDropdownOpen] = useState(false)
    
    return(
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>

                <li 
                    className="dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <a href="#">Data Categories ▼</a>
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/wellbeing" className="wellbeing">Well-Being</Link></li>
                            <li><Link to="/ai" className="AI">AI</Link></li>
                            <li><Link to="/sports" className="sports">Sports</Link></li>
                            <li><Link to="/jobs" className="jobs">Jobs</Link></li>
                            <li><Link to="/nu-issues" className="nuissues">NU Issues</Link></li>
                            <li><Link to="/national-politics" className="natpolitics">National Politics</Link></li>
                        </ul>
                    )}
                </li>

                <li><a href="#from-the-editor">From the Editor</a></li>
                <li><a href="#methodology">Methodology</a></li>
                <li><a href="#more">More</a></li>
              </ul>
        </nav>

    ); 
}

export default Navbar;