import React from "react";
import "../styles/Button.css";

const Button = ({ text, onClick, type = "button", variant = "primary", className = "" }) => {
    return (
        <button 
            className={`btn btn-${variant} ${className}`} 
            type={type} 
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
