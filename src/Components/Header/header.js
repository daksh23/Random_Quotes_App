import React from 'react';
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="row">
                <h2 className="left"> Quotes </h2>
                {/* <h2 className="right">
                  Search
                </h2> */}
            </div>
        </header>
    );
};

export default Header;