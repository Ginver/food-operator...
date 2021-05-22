import React, { useState, useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { UserContext } from "../context/UserContext";
import './Header.css';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

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
        <div className="header-container">

            <h4 className="header-appTitle"
                onClick={() => history.push('/')}
            >recipe wizard...
            </h4>

            <div className="headerProfile-container">
                <section className="header-profile">
                    {user !== null &&
                    <>
                        {/*<h1>profile</h1>*/}
                        <p>hello<strong> {user && user.username}</strong>!</p>
                        {/*<p><strong>{user && user.email}</strong></p>*/}
                    </>
                    }
                </section>

                <div>
                    <Link className="logout-link"
                            type="button"
                            onClick={logoutFunc}
                    >
                        log out
                    </Link>
                </div>
            </div>

            <div className="navBar-container">
                    <nav className="navBar">

                        <button onClick={handleToggle}>
                            {navbarOpen ? (
                                <MdClose style={{ color: "#EEEDDD", width: "35px", height: "35px" }} />
                            ) : (
                                <FiMenu style={{ color: "#EEEDDD", width: "35px", height: "35px" }} />
                            )}
                        </button>

                        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                            <li>
                                <NavLink exact to="/" activeClassName="active-link" onClick={() => closeMenu()}>home</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/signin" activeClassName="active-link" onClick={() => closeMenu()}>log in</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/signup" activeClassName="active-link" onClick={() => closeMenu()}>sign up</NavLink>
                            </li>
                            {user !== null &&
                                <>
                            <li>
                                <NavLink exact to="/profile" activeClassName="active-link" onClick={() => closeMenu()}>overview</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/balanceday" activeClassName="active-link" onClick={() => closeMenu()}>balance day</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/workoutday" activeClassName="active-link" onClick={() => closeMenu()}>work-out day</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/notimeforcookingday" activeClassName="active-link" onClick={() => closeMenu()}>no-time-for-cooking day</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/comfortfoodday" activeClassName="active-link" onClick={() => closeMenu()}>comfort-food day</NavLink>
                            </li>
                                </>
                            }
                            <li>
                                <NavLink exact to="/coaching" activeClassName="active-link" onClick={() => closeMenu()}>personal coaching</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>



            </div>
        </>
    );
};

export default Header;