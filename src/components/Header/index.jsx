import './style.css';
import imgLogo from '../../img/slicelogo.png'

const Header = () => {

    return (
        <header>
            <img className="logo-header" src={imgLogo} alt="" />
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>CONTACT US</li>
                    <li>ABOUT US</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;