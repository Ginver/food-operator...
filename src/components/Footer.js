import React, { useState } from "react";
// import './Footer.css';


function Footer() {
    const [messageValue, setMessageValue] = useState('');
    const [checkedTerms, toggleCheckedTerms] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    function sendForm() {
        console.log(`The message: "${messageValue}" has been sent successfully.`);
        setSubmitted(true);
    }

    return (
        <React.Fragment>
            <div className="footer-container">
                <div className="footer-icon">
                    <h5>facebook</h5>
                    <h5>instagram</h5>
                    <h5>pinterest</h5>
                </div>
                <h2>Share your thoughts</h2>
                <form className="footer-form">
                    <label htmlFor="footer-input">
                        <input
                            type="text"
                            id="footer-input"
                            placeholder="Type your message here"
                            name="message"
                            className={messageValue.length > 50 ? 'input-error' : ''}
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                        />
                    </label>
                    {messageValue.length > 50 && <p className="footer-input-error">Your message is a little too long! Max. length: 400 character.</p>}

                    <label >
                        <input htmlFor="footer-terms-and-conditions"
                               type="checkbox"
                               id="footer-terms-and-conditions"
                               name="footer-and-conditions"
                               checked={checkedTerms}
                               onChange={() => toggleCheckedTerms(!checkedTerms)}
                               disabled={messageValue.length < 20}
                        />I'd like to receive your newsbrief'
                    </label>

                    <button className="footer-button"
                            type="submit"
                            disabled={!checkedTerms}
                            onClick={() => setSubmitted(true)}
                    >send
                    </button>
                </form>

                <div className="footer-contact">
                    <p>Contact: Gigi Lukacs 1034LJ Amsterdam  Bramzeilhof 66  gy.lakilukacs@gmail.com</p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Footer;
