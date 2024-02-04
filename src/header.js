import React from "react"; 

 function Header () {
    return(
        <header>
                <nav className="nav-items container">
                    <img src= "./logo192.png" className="logo" />
                    <ul className="List">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    
                </nav>
            </header>
    )
}

export default Header;
