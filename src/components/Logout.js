// import React, { useState, useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import { UserContext } from "../context/UserContext";
//
// function Logout() {
//     const { logoutFunc } = useContext(UserContext);
//
//     const [error, setError] = useState(false);
//     const [loading, toggleLoading] = useState(false);
//
//     // const  history = useHistory(); // niet meer nodig, kan weg nadat we het in de context component hebben geplaatsd
//     const { handleSubmit } = useForm();
//
//     async function onSubmit(data) {
//         console.log(data);
//         setError(false);
//         toggleLoading(true);
//
//         // try {
//         //     const result = await axios.post('http://localhost:3000/signin', data);
//         //     // console.log(result.data.accessToken);
//
//             logoutFunc();
//
//             toggleLoading(false);
//
//         // } catch(e) {
//         //     console.error(e)
//         //     setError(e);
//         //     toggleLoading(false);
//         // }
//     }
//
//     return (
//         <>
//
//             <form onSubmit={handleSubmit(onSubmit)}>
//
//                 <button
//                     type="submit"
//                     className="form-button"
//                     // onClick={logoutFunc}
//                 >
//                     logout
//                 </button>
//
//                 {error && (<span className="wrong-img-error">Something went wrong!</span>)}
//                 {loading && (<span>Loading...</span>)}
//
//             </form>
//
//         </>
//     );
// }
//
// export default Logout;