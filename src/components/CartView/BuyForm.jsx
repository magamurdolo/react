import React, { useState } from "react";
import Button from "../Button/Button";
import InputForm from "./InputForm";
import "./buyForm.css";

export default function BuyForm(props) {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    console.log(userData);

    function onInputChange(evt) {
        const inputName = evt.target.name;
        const value = evt.target.value;

        const newUserData = { ...userData };
        newUserData[inputName] = value;
        setUserData(newUserData);
    }

    function onSubmit(evt) {
        evt.preventDefault();
        props.onSubmit(userData);
    }

    return (
        <form onSubmit={onSubmit}>
            <InputForm className="styleForm"
                required="true"
                title="Nombre"
                name="name"
                value={userData.name}
                onInputChange={onInputChange}
            />
            <InputForm className="styleForm"
                required="true"
                title="Email"
                name="email"
                value={userData.email}
                onInputChange={onInputChange}
            />
            <InputForm className="styleForm"
                required="true"
                title="Teléfono"
                name="phone"
                value={userData.phone}
                onInputChange={onInputChange}
            />

            <Button onClick={onSubmit}>Crear orden</Button>
        </form>
    );
}