
import logo from "../assets/airbnb_logo.png"

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="aitbnb-logo" />
            </div>
        </header>
    )
}

export default Header