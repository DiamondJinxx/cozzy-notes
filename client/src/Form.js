import React from "react";
import Greetings from "./Greetings";


const Form = () => (
    <div>
        <input type="text" name="firstName"/> 
        <Greetings firstName="Test"/>
    </div>
);


export default Form;
