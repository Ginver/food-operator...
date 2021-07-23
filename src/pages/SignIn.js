import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { UserContext } from "../context/UserContext";
import "./SignIn.css";
import InputField from "../components/InputField";
import SubmitButtons from "../components/SubmitButtons";

function SignIn() {
    const { loginFunc } = useContext(UserContext);

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const { handleSubmit, register, formState: { errors } } = useForm({mode: "onBlur"});

    async function onSubmit(data) {
        console.log(data);
        setError(false);
        toggleLoading(true);

        try {
            const result = await axios.post('http://localhost:3000/signin', data);
            // console.log(result.data.accessToken);

            loginFunc(result.data.accessToken);

            toggleLoading(false);

        } catch(e) {
            console.error(e)
            setError(e);
            toggleLoading(false);
        }
    }

    return (
        <>
            <div className="signIn-container">

                <h1>sign in form</h1>

                <div className="signIn-form">

                    <form onSubmit={handleSubmit(onSubmit)}>

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

                        {/*<label htmlFor="email-field">*/}
                        {/*    email*/}
                        {/*    <input*/}
                        {/*        type="email"*/}
                        {/*        id="email-field"*/}
                        {/*        name="email"*/}
                        {/*        placeholder="jip.morsink@gmail.com"*/}
                        {/*        {...register("email", {*/}
                        {/*                required: true,*/}
                        {/*                validate: (value) => value.includes('@'),*/}
                        {/*                message: 'A valid email address should contain @',*/}
                        {/*            },*/}
                        {/*        )}*/}
                        {/*    />*/}
                        {/*</label>*/}
                        {/*{errors.email && <p className="error-msg">{errors.email.message}</p>}*/}

                        {/*<label htmlFor="password-field">*/}
                        {/*    password*/}
                        {/*    <input*/}
                        {/*        type="password"*/}
                        {/*        id="password-field"*/}
                        {/*        name="password"*/}
                        {/*        placeholder="e.g. H74gdhTkd"*/}
                        {/*        {...register("password", {*/}
                        {/*                required: {*/}
                        {/*                    value: true,*/}
                        {/*                    min: 8,*/}
                        {/*                    message: 'Your password should contain at least one capital letter, a special character and it should be a minimum of 6 characters'*/}
                        {/*                },*/}
                        {/*            },*/}
                        {/*        )}*/}
                        {/*    />*/}
                        {/*</label>*/}
                        {/*{errors.username && <p className="error-msg">{errors.username.message}</p>}*/}

                        <SubmitButtons label="sign in" type="submit"/>

                        {/*<button*/}
                        {/*    className="action-button"*/}
                        {/*    type="submit"*/}
                        {/*>*/}
                        {/*    sign in*/}
                        {/*</button>*/}

                        {error && (<span className="error-msg">Oops, something went wrong, please check your email and password!</span>)}
                        {loading && (<span>Loading...</span>)}

                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;