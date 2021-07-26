import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios";
import './SignUp.css';
import InputField from "../components/InputField";
// import SubmitButtons from "../components/SubmitButtons";
import BackToBtn from "../components/BackToBtn";

function SignUp() {
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const history = useHistory();

    const { handleSubmit, register,  formState: { errors } } = useForm({
        mode: 'onchange'
    });

    async function onSubmit(data) {
        console.log(data);
        setError(false);
        toggleLoading(true);

        try {
            const result = await axios.post('https://polar-lake-14365.herokuapp.com/api/auth/signup',{
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                username: data.username,
                password: data.password,
            });

            console.log(result);
            toggleRegisterSuccess(true);
            setTimeout(() => {history.push('/signin')
            }, 2000);

            toggleLoading(false);

        } catch(e) {
            console.log(e)
            setError(e);
            toggleLoading(false);
        }
    }

    return (
        <>
            <div className="signUp-container">
                <h1>sign up form</h1>
                <div className="signUp-form">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <InputField
                        label="first name"
                        type="text"
                        id="input-field"
                        name="firstname"
                        placeholder="Hilda"
                        {...register("firstname", {
                                    required: {
                                        value: true,
                                        message: 'This field should not be empty',
                                    },
                                })}
                    />
                    {errors.firstname && <p className="error-msg">{errors.firstname.message}</p>}

                    <InputField
                        label="last name"
                        type="text"
                        id="input-field"
                        name="lastname"
                        placeholder="Morsink"
                        {...register("lastname", {
                                    required: {
                                        value: true,
                                        message: 'This field should not be empty',
                                    },
                                })}
                    />
                    {errors.lastname && <p className="error-msg">{errors.lastname.message}</p>}

                    <InputField
                        label="email"
                        type="text"
                        id="input-field"
                        name="email"
                        placeholder="hilda.morsink@gmail.com"
                            {...register("email", {
                                required: true,
                                    validate: (value) => value.includes('@'),
                                    message: 'A valid email address should contain @',
                                },
                            )}
                    />
                    {errors.email && <p className="error-msg">{errors.email.message}</p>}

                    <InputField
                        label="username"
                        type="text"
                        id="input-field"
                        name="username"
                        placeholder="Hildafro"
                        {...register("username", {
                                    required: {
                                        value: true,
                                        message: 'This field should not be left empty'
                                    },
                                })}
                    />
                    {errors.username && <p className="error-msg">{errors.username.message}</p>}

                    <InputField
                        label="password"
                        type="text"
                        id="input-field"
                        name="password"
                        placeholder="Bananaflip#"
                        {...register("password", {
                                        required: {
                                            value: true,
                                            min: 8,
                                            message: 'Your password should contain at least one capital letter, a special character and it should be a minimum of 8 characters'
                                        },
                                    },
                                )}
                    />
                    {errors.password && <p className="error-msg">{errors.password.message}</p>}

                  {/*<SubmitButtons label="sign up" type="submit"/>*/}

                    <button
                        className="action-button"
                        type="submit"
                    >
                        sign up
                    </button>

                    {registerSuccess && <p className="error-msg">Registration was successful, please log in!</p>}

                    {error && (<span className="error-msg">Something went wrong!</span>)}
                    {loading && (<span>Loading...</span>)}

                </form>
                </div>

                <div className="signUp-rerouting-form">
                <p>already have an account? go to
                    <BackToBtn label="sign in" path='/signin'/>
                or go back to
                    <BackToBtn label="home" path='/'/>
                </p>
                </div>
            </div>
        </>
    );
}

export default SignUp;