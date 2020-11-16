import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import HomeIcon from '@material-ui/icons/Home'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <AppBar position="static" color="inherit" aria-label="menu">
      <Toolbar>
        <h1>CINNAMON MASKS</h1>
        <div>
          <nav>
            {isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
                {/* <Link to="/home">Home</Link> */}
                <Link to="/masks">Masks</Link>
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
              </div>
            ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <Link to="/">
                  {' '}
                  <HomeIcon />
                  HomePage
                </Link>
                <Link to="/masks">Masks</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/shopping-cart">
                  <AddShoppingCartIcon size="3em" />
                </Link>
              </div>
            )}
            <Link to="/shopping-cart">
              <HiShoppingBag size="2em" />
            </Link>
          </nav>
        </div>
        <hr />
      </Toolbar>
    </AppBar>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
