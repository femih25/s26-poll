import './category-icons.css'
import { Link } from 'react-router-dom'


const categories = [
    { name: 'Well-Being', path: '/wellbeing', icon: 'https://img.icons8.com/?size=2000&id=19166&format=png&color=000000', color: "#a0a972"},
    { name: 'AI', path: '/ai', icon: 'https://img.icons8.com/?size=2000&id=R13upTV7Q1bg&format=png&color=000000', color: "#bedce7"},
    { name: 'Sports', path: '/sports', icon: 'https://img.icons8.com/?size=2000&id=9817&format=png&color=000000', color: "#f0a94f"},
    { name: 'Jobs', path: '/jobs', icon: 'https://img.icons8.com/?size=2000&id=2784&format=png&color=000000', color: "#4b7b74"},
    { name: 'NU Issues', path: '/nu-issues', icon: 'https://img.icons8.com/?size=2000&id=42179&format=png&color=000000', color: "#705294"},
    { name: 'National Politics', path: '/national-politics', icon: 'https://img.icons8.com/?size=2000&id=4682&format=png&color=000000', color: "#f1d279"},
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