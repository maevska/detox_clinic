import React from "react";
import "../styles/Card.css";
import Button from "../components/Button";

const Card = ({ image, title, description, price }) => {
    return (
    <section className="card-section">
        <div className="card-background">
            <img src={image} alt={title} className="image-card" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        <div className="card-footer">
            <p className="card-price">от {price} ₽</p>
            <Button text="Начать лечение" />
        </div>
        </div>
    </section>
    );
};

export default Card;