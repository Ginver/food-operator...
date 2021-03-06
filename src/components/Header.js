import React, { useState, useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { UserContext } from "../context/UserContext";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import './Header.css';

function Header() {
    const history = useHistory()
    const { logoutFunc, user } = useContext(UserContext);
    console.log(user);

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <>
        <header className="header-container">

            <h4 className="header-appTitle"
                onClick={() => history.push('/')}
            >food operator...
            </h4>

                <div className="headerProfile-container">
                    <div className="welcome-login-container">
                        {user !== null &&
                        <>
                            <p className="header-profile"
                               onClick={() => history.push('/overview')}
                            >hello<strong> {user && user.username}</strong>!</p>
                                <Link className="logout-link"
                                      // type="button"
                                      onClick={logoutFunc}
                                >
                                    log out
                                </Link>
                        </>
                        }
                    </div>

                    <div>
                    <button onClick={handleToggle}>
                        {navbarOpen ? (
                            <FiMenu style={{ color: "#68530E", width: "40px", height: "40px" }} />
                        ) : (
                            <FiMenu style={{ color: "#68530E", width: "40px", height: "40px" }} />
                        )}
                    </button>
                    </div>
                </div>

                    <nav className="navBar">

                            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                                <li onClick={() => closeMenu()}>
                                    <button onClick={handleToggle}>
                                    {navbarOpen ? (
                                        <MdClose style={{ color: "#68530E", width: "30px", height: "30px" }} />
                                    ) : (
                                        <FiMenu style={{ color: "#68530E", width: "30px", height: "30px" }} />
                                    )}
                                    </button>
                                </li>
                                <li>
                                    <NavLink exact to="/" activeClassName="active-link" onClick={() => closeMenu()}>home</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/signin" activeClassName="active-link" onClick={() => closeMenu()}>sign in</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/signup" activeClassName="active-link" onClick={() => closeMenu()}>sign up</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/balanceday" activeClassName="active-link" onClick={() => closeMenu()}>balance day</NavLink>
                                </li>
                                {user !== null &&
                                    <>
                                        <li>
                                            <NavLink exact to="/workoutday" activeClassName="active-link" onClick={() => closeMenu()}>work-out day</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to="/notimeforcookingday" activeClassName="active-link" onClick={() => closeMenu()}>no-time-for-cooking day</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to="/comfortfoodday" activeClassName="active-link" onClick={() => closeMenu()}>comfort-food day</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to="/overview" activeClassName="active-link" onClick={() => closeMenu()}>overview</NavLink>
                                        </li>
                                    </>
                                }
                                <li>
                                    <NavLink exact to="/aboutus" activeClassName="active-link" onClick={() => closeMenu()}>about us</NavLink>
                                </li>
                            </ul>
                        </nav>

            </header>
        </>
    )
};

export default Header;