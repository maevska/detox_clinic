import React, { useState } from "react";
import "../styles/Staff.css";

const initialDoctors = [
    {
        name: "Меринов Артём Вячеславович",
        specialization: "Врач-нарколог",
        experience: "12 лет",
        image: "/images/doctor1.png",
    },
    {
        name: "Олиева Светлана Александровна",
        specialization: "Психиатр",
        experience: "8 лет",
        image: "/images/doctor2.png",
    },
    {
        name: "Аксёнов Дмитрий Михайлович",
        specialization: "Старший врач-нарколог",
        experience: "15 лет",
        image: "/images/doctor3.png",
    },
];

const Staff = () => {
    const [doctors, setDoctors] = useState(initialDoctors);

    const nextDoctor = () => {
        setDoctors((prev) => {
            const copy = [...prev];
            const first = copy.shift(); 
            copy.push(first); 
            return copy;
        });
    };

    const prevDoctor = () => {
        setDoctors((prev) => {
            const copy = [...prev];
            const last = copy.pop(); 
            copy.unshift(last); 
            return copy;
        });
    };

    const currentDoctor = doctors[0]; 

    return (
        <div className="staff-slider">
            <div className="staff-info">
                <h2>Медицинский персонал</h2>
                <div className="staff-card">
                    <h3>{currentDoctor.name}</h3>
                    <p>
                        Специализация:{" "}
                        <span className="highlight">{currentDoctor.specialization}</span>
                    </p>
                    <p>
                        Опыт работы:{" "}
                        <span className="highlight">{currentDoctor.experience}</span>
                    </p>
                </div>
                <div className="staff-controls">
                    <button onClick={prevDoctor}>◀</button>
                    <button onClick={nextDoctor}>▶</button>
                </div>
            </div>

            <div className="carousel-container">
                <div className="carousel-track">
                    {doctors.map((doc, index) => (
                        <img
                            key={index}
                            src={doc.image}
                            alt={doc.name}
                            className={index === 0 ? "active" : "inactive"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Staff;
