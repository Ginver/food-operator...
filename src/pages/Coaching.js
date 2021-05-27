import React from 'react';
import { useForm } from 'react-hook-form';

function Coaching() {
    const { handleSubmit, formState: { errors }, register, watch } = useForm();
    const selectedReferrer = watch('found-through');

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
       <>
           <div className="coaching-container">
           <form onSubmit={handleSubmit(onFormSubmit)}>

                   <legend>Your review</legend>
                   <label htmlFor="referrer">
                       How did you find us?
                       <select
                           name="found-through"
                           id="referrer"
                           {...register("found-through")}
                       >
                           <option value="google">google</option>
                           <option value="friend">via friend</option>
                           <option value="advertising">advertisement</option>
                           <option value="other">other</option>
                       </select>
                   </label>

                   {selectedReferrer === 'other' && (
                       <input
                           type="text"
                           name="found-through-other"
                           {...register({required: true})}
                           />
                   )}

                    {/*<label htmlFor="terms-and-conditions">*/}
                    {/*    I'd like to get in touch to make an appointment for personal coaching*/}
                    {/*<input*/}
                    {/*    type="checkbox"*/}
                    {/*    name="terms-and-conditions"*/}
                    {/*    // id="terms-and-conditions"*/}
                    {/*    {...register({required: true})}*/}
                    {/*/>*/}
                    {/*</label>*/}

                   <label htmlFor="recipe-comments">
                       let us know if you would like to plan a personal coaching appointment
                       <textarea
                           id="recipe-comments"
                           rows="10"
                           cols="40"
                           placeholder="type hier your text"
                           {...register("comments")}
                       >
                       </textarea>
                   </label>

                        <button
                           className="action-button"
                           type="submit">
                           send
                        </button>

                </form>
            </div>
       </>
    )
}

export default Coaching;
