import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();
    return (
        <>
            <div>
                <h1 className="page-titles">home</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
                {/*<p>Als je ingelogd bent, bekijk dan de <Link to="/profile">profile</Link></p>*/}
                {/*<p>Je kunt ook <Link to="/signin">Log in</Link> of jezelf <Link to="/signup">Register</Link> als je nog geen account hebt.</p>*/}
                <p>let's get you started!</p>


                <div className="home-button">
                    <button className="action-button"
                        type="button"
                        onClick={() => history.push('/signin')}
                    >
                        log in
                    </button>
                    <button className="action-button"
                        type="button"
                        onClick={() => history.push('/signup')}
                    >
                        register
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;