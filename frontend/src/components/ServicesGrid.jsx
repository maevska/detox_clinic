import React, { useState } from 'react';
import "../styles/ServicesGrid.css";
import Card from "../components/Card";
import Rectangle from "../assets/Rectangle11.png"
import Rectangle1 from "../assets/Rectangle12.png"
import Rectangle2 from "../assets/Rectangle13.png"
import Rectangle3 from "../assets/Rectangle14.png"
import Rectangle4 from "../assets/Rectangle15.png"
import Rectangle5 from "../assets/Rectangle16.png"

const ServicesGrid = () => {
    return (
        <div className="card-container">
            <Card
                image={ Rectangle }
                title="Стандартная терапия"
                description="Для облегчения похмельного синдрома и прерывания запоя. А также при алкогольном отравлении"
                price="2400"
            />

            <Card
                image={ Rectangle1 }
                title="Усиленная терапия"
                description="Рекомендуется для облегчения похмелья и прерывания запоев длительностью до недели"
                price="5800"
            />

            <Card
                image={ Rectangle5 }
                title="Восстановление +"
                description="Для облегчения похмельного синдрома и прерывания запоя. А также при алкогольном отравлении"
                price="15 800"
            />

            <Card
                image={ Rectangle3 }
                title="Максимальная терапия"
                description="Для облегчения похмельного синдрома и прерывания запоя. А также при алкогольном отравлении"
                price="18 800"
            />

            <Card
                image={ Rectangle4 }
                title="Кодирование +"
                description="Рекомендуется для облегчения похмелья и прерывания запоев длительностью до недели"
                price="3200"
            />

            <Card
                image={ Rectangle2 }
                title="Выезд нарколога на дом"
                description="Для облегчения похмельного синдрома и прерывания запоя. А также при алкогольном отравлении"
                price="3500"
            />
        </div>
    );
};

export default ServicesGrid;