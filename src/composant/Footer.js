import './footer.css'
import logo from '../white_logo.png'
function Footer() {
    return (
        <div className="Footer">
            <img src={logo} alt='logo' className='logo-footer'></img>
            <div className='copyright'>© 2020 Kasa. All rights reserved</div>
        </div>
)
}
export default Footer