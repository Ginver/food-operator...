import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from "axios";

export const UserContext = createContext({});

function UserContextProvider({ children }) {
    const history = useHistory();

    // maak state voor de gebruikersdata
    const [userAuth, setUserAuth] = useState({
        user: null,
        status: 'pending',
    });
    // de applicatie wordt geladen, obv de status de app wordt wel of niet geladen
    // console.log(userAuth);

    // fetch user data
    async function fetchUserData(jwtToken) {
        // console.log(jwtToken);
        // we hebben de JWT nodig om daaruit de user ID te halen
        // Hier gebruiken we de package jwt-docode van npm voor
        const decoded = jwt_decode(jwtToken)
        const userId = decoded.sub;
        // console.log("DECODED JWT", decoded);

        // gebruikersdata ophalen / axios, async.get, try/catch, request
        try {
            // console.log('hallllloooo!')
            const result = await axios.get(`http://localhost:3000/600/users/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            });
            // console.log(result);
            // die data gebruiken om de context te vullen
            setUserAuth({
                user: {
                    firstname: result.data.firstname,
                    lastname: result.data.lastname,
                    email: result.data.email,
                    username: result.data.username,
                    id: result.data.id,
                    country: result.data.country,
                },
                status: 'done',
            });

        }catch(e) {
            console.error(e);
        }
        // console.log("login")
    };

    // wanneer de applicatie geladen wordt willen we checken of er een token is, en als die er is maar er is geen gebruiker,
    // dan willen we alsnog de gebruikersdata ophalen

    useEffect(() => {
        // checken of er een token is in de local storage?
            const token = localStorage.getItem('token');
        // checken of er geen user aanwezig is in de context
            if (token !== null && userAuth.user === null) {
        // haal dan gebruikersdata op
        // console.log('Er is een token!')

          fetchUserData(token);

            } else {
        // haal dan data op (zoals bij de login)
        // zo nee, dan geen user, maar wel status op 'done' zetten:
        setUserAuth({
            user: null,
            status: 'done',
        })
      }
    }, []);

    //-----------------------------------------------------------------------------------------------------------------
    // login functie aanmaken
    async function loginFunction(jwtToken) {
        // console.log(jwtToken)

        // JWT token in de local storage te zetten
        localStorage.setItem('token', jwtToken);

        // gebruikersdata ophalen
        fetchUserData(jwtToken);

    //     // axios, async.get, try/catch, request
    //     try {
    //         // console.log('hallllloooo!')
    //         const result = await axios.get(`http://localhost:3000/600/users/${userId}`, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${jwtToken}`,
    //             }
    //         });
    //         console.log(result);
    //
    //         // die data gebruike om de context te vullen
    //         setUserAuth({
    //             user: {
    //                 firstname: result.data.firstname,
    //                 lastname: result.data.lastname,
    //                 email: result.data.email,
    //                 username: result.data.username,
    //                 id: result.data.id,
    //                 country: result.data.country,
    //             },
    //             status: 'done',
    //         });
    //
            // doorlinken naar de profiel pagina
            history.push('/profile');
    //
    //     }catch(e) {
    //         console.error(e);
    //     }
    };

    //----------------------------------------------------------------------------------------------------------------
    // logout functie aanmaken
    function logoutFunction() {
        console.log("Logout")
        // leeghalen van de localstorage (met localstorage.clear())
         localStorage.clear();
        // user in de context weer op 'null' zetten
        setUserAuth ({
            user: null,
            status: "done",
        })
        history.push("/");
    }

    // omdat userAuth een object is en we nog steeds gebruik willen maken van die automatische state updates zullen we de userAuth data 'spread'-en
    const data = {
        ...userAuth,
        loginFunc: loginFunction,
        logoutFunc: logoutFunction,
    }
//---------------------------------------------------------------------------------------------------------------------
    return (
        <UserContext.Provider value={data}>
            {userAuth.status === 'done' ? children : <p>Loading...</p>}
            {/*{children}*/}
        </UserContext.Provider>
    );
}

export default UserContextProvider;