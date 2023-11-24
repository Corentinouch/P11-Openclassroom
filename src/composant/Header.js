import './header.css'
import logo from '../kasa_logo.png'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <div className="Header">
            <img className="header-img" src={logo} alt='logo'></img>
            <ul className='header-list'>
                <li><NavLink to="/" active="active"><span>Accueil</span></NavLink></li>
                <li><NavLink to="/propos" active="active"><span>A propos</span></NavLink></li>
            </ul>
        </div>
)
}
export default Header