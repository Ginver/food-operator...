import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import { UserContext } from "../context/UserContext";
// import './Header.css';

function Header() {
    const history = useHistory();
    const { logoutFunc, user } = useContext(UserContext);
    console.log(user);

    return (
        <>
            <nav>
                <div className="nav-container">
                    <h4 className="header-title">food operator</h4>

                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="active-link">home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/balanceday" activeClassName="active-link">balance day</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/workoutday" activeClassName="active-link">work-out day</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/notimeforcookingday" activeClassName="active-link">no-time-for-cooking day</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/comfortfoodday" activeClassName="active-link">comfort-food day</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/coaching" activeClassName="active-link">coaching</NavLink>
                        </li>
                    </ul>

                    <section>
                    <h1>profile</h1>
                    <p><strong>username:</strong> {user && user.username}</p>
                    <p><strong>email:</strong> {user && user.email}</p>
                    </section>

                    <div className="header-button">
                        <button
                            type="button"
                            onClick={() => history.push('/signin')}
                        >
                            log in
                        </button>
                        <button
                            type="button"
                            onClick={() => history.push('/signup')}
                        >
                            register
                        </button>

                        <button
                            type="button"
                            onClick={logoutFunc}
                        >
                            log out
                        </button>
                    </div>

                </div>
            </nav>

        </>
    );
};

export default Header;