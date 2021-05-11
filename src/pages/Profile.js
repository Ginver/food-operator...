import React from 'react';
import { Link } from 'react-router-dom';
// import { UserContext } from "../context/UserContext";

function Profile() {
    // const { user } = useContext(UserContext);
    // console.log(user);

    return (
        <React.Fragment>
            {/*<p>Welcome, {user && user.username}, on our website!</p>*/}

            <div className="day-button">
                <button className="balance-button"> <Link to="/balanceday">balance day</Link></button>
                <button className="notime-button"> <Link to="/noTimeForCookingDay">no-time-for-cooking day</Link></button>
                <button className="workout-button"> <Link to="/workoutday">work-out day</Link></button>
                <button className="comfort-button"> <Link to="/comfortfoodday">comfort-food day</Link></button>
            </div>

            <p><Link className="home-link" to="/">home</Link></p>
            <p><Link className="coaching-link" to="/">personal coaching</Link></p>

        </React.Fragment>
    );
}

export default Profile;