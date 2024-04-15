import './footer.css'
import logo from '../white_logo.png'
function Footer() {
    return (
        <div className="Footer">
            <img src={logo} alt='logo' className='logo-footer'></img>
            <div className='copyright'>
                <p>
                    © 2020 Kasa. 
                </p>
                <p>
                    All rights reserved
                </p>
            </div>
        </div>
)
}
export default Footer
