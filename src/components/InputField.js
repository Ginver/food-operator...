import React  from "react";
import './InputField.css';

function InputField({ label, type, id, name, placeholder }) {

 return (
     <>
    <div className="signUp-form">
        {label && <label htmlFor="input-field">{label}</label>}
        <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
        />
    </div>
     </>
);
}
export default InputField;