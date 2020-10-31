import React from 'react'
import './Header.css'
import { Search, ShoppingBasket } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import useTotalBasket from '../../CustomHooks/useTotalBasket'
import { auth } from '../../firebase'

function Header({ userName }) {
  const [totalPrice, totalQuantity] = useTotalBasket()
  const handleAuthentication = () => {
    if (userName) {
      auth.signOut()
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo"></div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!userName && '/login'}>
          <div onClick={handleAuthentication} className="header__option">
            <div className="header__optionLineOne">
              Hello {!userName ? ' Guest' : <b> {userName}</b>}
            </div>
            <div className="header__optionLineTwo">
              {!userName ? 'Sign In' : 'Sign Out'}
            </div>
          </div>
        </Link>
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
            <span className="header__optionLineTwo header__basketCount">
              {totalQuantity}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
