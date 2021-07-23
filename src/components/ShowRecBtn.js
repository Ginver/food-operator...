import React from "react";
import './ShowRecBtn.css';

function ShowRecBtn( {showGetMealData}) {

    return(

            <div className="showRec-cont">
                <button
                    className="recipes-button"
                    onClick={showGetMealData}
                >
                    show recipes
                </button>
                <h6>* if you don't like these recipes, hit the button again!</h6>
            </div>

    )
};

export default ShowRecBtn;
