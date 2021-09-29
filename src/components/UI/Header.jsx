import React from 'react'
import svg from "../assets/hr_logo.svg";

const Header = () => {
    return (
        <header className="head">
        <img
          viewBox="0 0 48 48"
          height="50px"
          width="200px"
          src={svg}
          alt="logo"
        />
      </header>
    )
}

export default Header
