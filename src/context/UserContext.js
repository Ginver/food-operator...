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
            loginFunc(token)
        } else {
            setUserAuth({
                user: null,
                status: 'done',
            })
        }
    }, []);


    async function loginFunc(token) {
        const decoded = jwt_decode(token);
        console.log('DECODED JWT', decoded);

        try {
             const result = await axios.get(`https://polar-lake-14365.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ` + token,
                }
            });

            setUserAuth({
                user: {
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

    function logoutFunc() {
         localStorage.clear();
        setUserAuth ({
            user: null,
            status: "done",
        })
        history.push("/");
    }

    const data = {
        ...userAuth,
        loginFunc,
        logoutFunc
    }

    return (
        <UserContext.Provider value={data}>
            {userAuth.status === 'done' ? children : <p>Loading...</p>}
        </UserContext.Provider>
    );
}

export default UserContextProvider;