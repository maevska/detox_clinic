import "../styles/Steps.css";
import { FaPhoneAlt, FaUserMd, FaHeartbeat, FaStethoscope, FaClipboardList} from "react-icons/fa";

const stepsData = [
    { number: "01", icon: <FaPhoneAlt />, text: "Диагностика состояния" },
    { number: "02", icon: <FaClipboardList />, text: "Составление плана лечения" },
    { number: "03", icon: <FaStethoscope />, text: "Снятие симптомов" },
    { number: "04", icon: <FaHeartbeat />, text: "Восстановление организма" },
    { number: "05", icon: <FaUserMd />, text: "Бесплатные консультации" },
];

const Steps = () => {
    return (
    <div className="steps-container">
        <h2 className="steps-title">Этапы лечения</h2>
        <div className="steps-list">
        {stepsData.map((step, index) => (
            <div className="step-item" key={index}>
            <div className="step-number">{step.number}</div>
            <div className="step-icon">{step.icon}</div>
            <p className="step-text">{step.text}</p>
            </div>
        ))}
        </div>
    </div>
);
};

export default Steps;