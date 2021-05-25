import React, { useState } from "react";
import './Footer.css';


function Footer() {
    const [messageValue, setMessageValue] = useState('');
    const [checkedTerms, toggleCheckedTerms] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    function sendForm() {
        console.log(`The message: "${messageValue}" has been sent successfully.`);
        setSubmitted(true);
    }

    return (
        <>
            <div className="footer-container">
                {/*<div className="footer-icon">*/}
                    {/*<h5>facebook</h5>*/}
                    {/*<h5>instagram</h5>*/}
                    {/*<h5>pinterest</h5>*/}
                {/*</div>*/}

                <form className="footer-form">
                    <label >
                        <input htmlFor="footer-terms-and-conditions"
                               type="checkbox"
                               id="footer-terms-and-conditions"
                               name="footer-and-conditions"
                               checked={checkedTerms}
                               onChange={() => toggleCheckedTerms(!checkedTerms)}
                               // disabled={messageValue.length < 20}
                        />I'd like to receive your newsbrief'
                    </label>

                    <button className="overview-button"
                            type="submit"
                            disabled={!checkedTerms}
                            onClick={() => setSubmitted(true)}
                    >send
                    </button>
                </form>

                <div className="footer-contact">
                    <p>Contact<br /> Gigi Lukacs <br />1034LJ Amsterdam<br />  Bramzeilhof 66 <br /> gy.lakilukacs@gmail.com</p>
                </div>

            </div>
        </>
    )
};

export default Footer;
