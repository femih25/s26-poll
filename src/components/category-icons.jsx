import './category-icons.css'
import { Link } from 'react-router-dom'


const categories = [
    { name: 'WELL-BEING', className: 'wellbeing', path: '/wellbeing', icon: 'Well-being_Icon.png', topic: 'Social satisfaction, well-being, screen time and alcohol'},
    { name: 'AI', path: '/ai', icon: 'AI_Icon.png', topic: 'AI’s impact on academics, jobs and society'},
    { name: 'SPORTS', path: '/sports', icon: 'Sports_Icon.png', topic: 'How much Northwestern students watch and care about NU sports'},
    { name: 'CAREER', path: '/jobs', icon: 'Career_Icon.png', topic: 'Summer plans, future career worries'},
    { name: 'NU ISSUES', path: '/nu-issues', icon: 'NU_Issues_Icon.png', topic: 'Bienen’s presidency, federal funding deal, antisemitism and Islamophobia'},
    { name: 'NATIONAL POLITICS', path: '/national-politics', icon: 'natpol_icon.png', topic: 'Political leaning, Trump job approval and federal immigration enforcement'},
  ]


function CategoryIcons() {
    return(
        <div className="category-icon-grid">
            {categories.map((cat) => (
                <Link to={cat.path} key={cat.name} className="category-icon">
                    <img src={cat.icon} alt={cat.name} />
                    <span>{cat.name}</span>
                    {cat.topic && <span className="category-tooltip">{cat.topic}</span>}
                </Link>
      ))}
        </div> 
    )
}
export default CategoryIcons;