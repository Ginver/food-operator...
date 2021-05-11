import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div>
                <h1>Home</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
                <p>Als je ingelogd bent, bekijk dan de <Link to="/profile">profile</Link></p>
                <p>Je kunt ook <Link to="/signin">Log in</Link> of jezelf <Link to="/signup">Register</Link> als je nog geen account hebt.</p>
            </div>
        </>
    );
}

export default Home;