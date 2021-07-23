import React  from "react";
import './InputField.css';
// import { useForm } from 'react-hook-form';
//
// const { handleSubmit, register,  formState: { errors } } = useForm({
//     mode: 'onchange'
// });
function InputField({ onSubmit, register, label, type, id, name, placeholder }) {

 return (
     <>
    <div className="signUp-form">
        {label && <label htmlFor="input-field">{label}</label>}
        <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            register={register}
            onSubmit={onSubmit}

        />
    </div>
     </>
);
}
export default InputField;