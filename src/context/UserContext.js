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

    useEffect(() => {
        const token = localStorage.getItem('JWT_token');

        if (token !== null && userAuth.user === null) {
            loginFunction(token)
        } else {
            setUserAuth({
                user: null,
                status: 'done',
            });
        }
    }, []);

    async function fetchUserData(jwtToken) {
        const decoded = jwt_decode(jwtToken);
        console.log('DECODED JWT', decoded);
        localStorage.setItem('JWT_token', jwtToken);

        try {
             const result = await axios.get(`https://polar-lake-14365.herokuapp.com/api/user`, {
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
        </UserContext.Provider>
    );
}

export default UserContextProvider;