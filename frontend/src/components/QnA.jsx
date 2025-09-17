import React, { useState } from 'react';
import "../styles/QnA.css";
import { Plus, Minus } from "lucide-react";

const QnA = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="qna-item" onClick={() => setIsOpen(!isOpen)}>
            <div className="qna-header">
                <h3 className={`faq-question ${isOpen ? "active" : ""}`}>
                    {question}
                </h3>
                <span className='qna-icon'>
                    {isOpen ? <Minus size={35} /> : <Plus size={35} /> }
                </span>
            </div>
            {isOpen && <p className='qna-answer'>{answer}</p>}
        </div>
    );
};

export default QnA;