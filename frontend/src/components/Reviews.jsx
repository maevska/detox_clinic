import React, { useState } from 'react';
import "../styles/Reviews.css";
import rewiews from '../data/RewiewsData';

const Rewiews = () => {
    const [rewiew, setRewie] = useState(0);

    const prevRewiew = () => {
        setRewiew((prev) => prev - 2 < 0 ? rewiews.length - (rewiews.length % 2 === 0 ? 2 : 1) : prev - 2);
    };

    const nextRewiew = () => {
        setRewie((prev) => prev + 2 >= rewiews.length ? 0 : prev + 2);
    };

    const CurrentRewiew = rewiews.slice(rewiew, rewiew + 2);

    return (
        <section className='rewiew-section'>
            <div className="rewiew-head">
                <h2 className="rewiew-h2">Отзывы пациентов</h2>
                <div className="rewiews-controls">
                    <button onClick={prevRewiew}>◀</button>
                    <button onClick={nextRewiew}>▶</button>
                </div>
            </div>

            <div className="rewiew-content">
                {CurrentRewiew.map((item, index) => (
                    <div key={index} className="rewiew-cards">
                        <div className="rewiew-content-cards">
                            <h3 className="rewiew-h3">
                                {item.name}
                            </h3>
                            <p className="rewiew-p">
                                {item.rewiew}
                            </p>
                            </div>
                            <div className="rewiew-data">
                                <p className="rewiew-data-p">
                                    {item.data}
                                </p>
                            </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Rewiews;