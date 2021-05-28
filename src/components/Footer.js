import React, { useState } from "react";
import './Footer.css';


function Footer() {
    const [checkedTerms, toggleCheckedTerms] = useState(false);

    return (
        <>
            <div className="footer-container">

                <form className="footer-form">

                        <input
                            type="email"
                            id="email-field"
                            name="email"
                            placeholder="jip.morsink@gmail.com"
                        />

                        <div className="footer-checkbox">
                            <input htmlFor="footer-terms-and-conditions"
                                    type="checkbox"
                                    id="footer-terms-and-conditions"
                                    name="footer-and-conditions"
                                    checked={checkedTerms}
                                    onChange={() => toggleCheckedTerms(!checkedTerms)}
                        />
                            <label>I'd like to receive your newsletter'</label>
                        </div>


                    <button className="overview-button"
                            type="submit"
                            disabled={!checkedTerms}
                     >send
                    </button>
                </form>

                <div className="footer-contact">
                    <p>Contact: <br /> Gigi Lukacs <br />1034LJ Amsterdam <br />  Bramzeilhof 66 <br /> gy.lakilukacs@gmail.com</p>
                </div>

            </div>
        </>
    )
};

export default Footer;
