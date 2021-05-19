import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from "../context/UserContext";
import './Profile.css';

function Profile() {
    const { user } = useContext(UserContext);
    console.log(user);

    const history = useHistory();

    return (
        <>

            <div className="planner-container">
                <button className="planner-button balance-button" onClick={() => history.push('/balanceday')}>balance day</button>
                <button className="planner-button notime-button" onClick={() => history.push('/noTimeForCookingDay')}>no-time-for-cooking day</button>
            </div>
                <div className="planner-container">
                <button className="planner-button workout-button" onClick={() => history.push('/workoutday')}>work-out day</button>
                <button className="planner-button comfort-button" onClick={() => history.push('/comfortfoodday')}>comfort-food day</button>
            </div>

        </>
    );
}

export default Profile;