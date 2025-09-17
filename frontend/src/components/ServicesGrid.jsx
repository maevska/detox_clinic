import React, { useState } from 'react';
import "../styles/ServicesGrid.css";
import Card from "../components/Card";
import service from '../data/ServiceData';

const ServicesGrid = () => {
    return (
        <div className="card-container">
            {service.map((service, index) => (
                <Card
                    key={index}
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    price={service.price}
                />
            ))}
        </div>
    );
};

export default ServicesGrid;