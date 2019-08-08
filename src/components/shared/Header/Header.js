import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <h1>Welcome easy react</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Portefolio</a>
                <a href="#">Contact</a>
                <div className="animation start-home"></div>
            </nav>
        </div>
    )
}

export default Header;
