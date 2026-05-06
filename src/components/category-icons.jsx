import './category-icons.css'
import { Link } from 'react-router-dom'


const categories = [
    { name: 'Well-Being', path: '/wellbeing', icon: '/public/placeholder.png' },
    { name: 'AI', path: '/ai', icon: '/public/placeholder.png' },
    { name: 'Sports', path: '/sports', icon: '/public/placeholder.png' },
    { name: 'Jobs', path: '/jobs', icon: '/public/placeholder.png' },
    { name: 'NU Issues', path: '/nu-issues', icon: '/public/placeholder.png' },
    { name: 'National Politics', path: '/national-politics', icon: '/public/placeholder.png' },
  ]


function CategoryIcons() {
    return(
        <div className="category-icon-grid">
            {categories.map((cat) => (
                <Link to={cat.path} key={cat.name} className="category-icon">
                    <img src={cat.icon} alt={cat.name} />
                    <span>{cat.name}</span>
                </Link>
      ))}
        </div> 
    )
}
export default CategoryIcons;