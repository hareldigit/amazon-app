import React from 'react'
import './Header.css'
import { Search, ShoppingBasket } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <Link to={'/'}>
        <div className="header__logo"></div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <div className="header__optionLineOne">Hello Guest</div>
          <div className="header__optionLineTwo">Sign In</div>
        </div>
        <div className="header__option">
          <div className="header__optionLineOne">Returns</div>
          <div className="header__optionLineTwo">& Oreders</div>
        </div>
        <div className="header__option">
          <div className="header__optionLineOne">Your</div>
          <div className="header__optionLineTwo">Prime</div>
        </div>
        <Link to={'/checkout'}>
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
