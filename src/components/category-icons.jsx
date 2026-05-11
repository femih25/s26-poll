import './category-icons.css'
import { Link } from 'react-router-dom'


const categories = [
    { name: 'Well-Being', className: 'wellbeing', path: '/wellbeing', icon: 'Well-being_Icon.png'},
    { name: 'AI', path: '/ai', icon: 'AI_Icon.png'},
    { name: 'Sports', path: '/sports', icon: 'Sports_Icon.png'},
    { name: 'Career', path: '/jobs', icon: 'Career_Icon.png'},
    { name: 'NU Issues', path: '/nu-issues', icon: 'NU_Issues_Icon.png'},
    { name: 'National Politics', path: '/national-politics', icon: 'natpol_icon.png'},
  ]


function CategoryIcons() {
    return(
        <div className="category-icon-grid">
            {categories.map((cat) => (
                <Link to={cat.path} key={cat.name} className="category-icon" style={{ '--hover-color': cat.color }}>
                    <img src={cat.icon} alt={cat.name} />
                    <span>{cat.name}</span>
                </Link>
      ))}
        </div> 
    )
}
export default CategoryIcons;