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
               {/*<h1>Share your thoughts!</h1>*/}
               {/*<label htmlFor="messageOfUser">*/}
               {/*    <input*/}
               {/*    type="text"*/}
               {/*    placeholder="Type your message here"*/}
               {/*    name="message"*/}
               {/*    id="messageOfUser"*/}
               {/*    className={messageValue.length > 200 ? 'input-error' : ''}*/}
               {/*    value={messageValue}*/}
               {/*    // onChange={(e) => setMessageValue(e.target.value)}*/}
               {/*    onChange={handleChange}*/}
               {/*    />*/}
               {/*    {messageValue.length > 200 && <p className="error-message">Please, keep your message under 200 characters!</p>}*/}
               {/*</label>*/}



               {/* Please, contact me for an appointment*/}
               {/* </label>*/}

               {/* <button*/}
               {/*     className="action-button"*/}
               {/*     type="submit"*/}
               {/*     disabled={!checkedTerms}*/}
               {/*     // onClick={sendForm}*/}
               {/* >*/}
               {/*     send*/}
               {/* </button>*/}
               <fieldset>
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
                    {/*    I'd like to get in touch someone for personal coaching*/}
                    {/*<input*/}
                    {/*    type="checkbox"*/}
                    {/*    name="terms-and-conditions"*/}
                    {/*    id="terms-and-conditions"*/}
                    {/*    {...register({required: true})}*/}
                    {/*/>*/}
                    {/*</label>*/}

                   <label htmlFor="recipe-comments">
                       share your thougts
                       <textarea
                           id="recipe-comments"
                           rows="5"
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
                    </fieldset>
                </form>
            </div>
       </>
    )
}

export default Coaching;
