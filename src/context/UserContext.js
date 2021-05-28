import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from "axios";

export const UserContext = createContext({});

function UserContextProvider({ children }) {
    const history = useHistory();

    const [userAuth, setUserAuth] = useState({
        user: null,
        status: 'pending',
    });

    async function fetchUserData(jwtToken) {

        const decoded = jwt_decode(jwtToken)
        const userId = decoded.sub;

        try {
            // console.log('hallllloooo!')
            const result = await axios.get(`http://localhost:3000/600/users/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            });

            setUserAuth({
                user: {
                    firstname: result.data.firstname,
                    lastname: result.data.lastname,
                    email: result.data.email,
                    username: result.data.username,
                    id: result.data.id,
                },
                status: 'done',
            });

        }catch(e) {
            console.error(e);
        }

    };

    useEffect(() => {

            const token = localStorage.getItem('token');
            if (token !== null && userAuth.user === null) {
                fetchUserData(token);
            } else {
                 setUserAuth({
                    user: null,
                    status: 'done',
                })
        }
    }, []);

    async function loginFunction(jwtToken) {

        localStorage.setItem('token', jwtToken);
        fetchUserData(jwtToken);

        history.push('/overview');
    };

    function logoutFunction() {
        console.log("Logout")
         localStorage.clear();
        setUserAuth ({
            user: null,
            status: "done",
        })
        history.push("/");
    }

    const data = {
        ...userAuth,
        loginFunc: loginFunction,
        logoutFunc: logoutFunction,
    }

    return (
        <UserContext.Provider value={data}>
            {userAuth.status === 'done' ? children : <p>Loading...</p>}
            {/*{children}*/}
        </UserContext.Provider>
    );
}

export default UserContextProvider;