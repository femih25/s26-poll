import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { PiCaretDownFill } from "react-icons/pi";
import './navbar.css'



function Navbar(){
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const navigate = useNavigate()

    const goToSection = (sectionId) => {
        navigate('/')
        setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'instant' })
        }, 5)
    }
    
    return(
        <nav className="navbar">
            <ul className="nav-links">
            <li onClick={() => goToSection('home')}>Home</li>

                <li 
                    className="dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <a href="#">Data Categories <PiCaretDownFill /></a>
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

                <li onClick={() => goToSection('from-the-editor')}>From the Editor</li>
                <li onClick={() => goToSection('methodology')}>Methodology</li>
                <li onClick={() => goToSection('more')}>More</li>
              </ul>
        </nav>

    ); 
}

export default Navbar;