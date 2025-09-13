import "../styles/ConsultationForm.css";
import Button from "../components/Button";

const ConsultationForm = ({ formsTitle, chaptersform, buttonText, warning }) => {
    return (
        <div className="container-form">
            <div className="headerform">
                <h2 className="form-h2">{formsTitle}</h2>
                <p className="parag-form">{chaptersform}</p>
            </div>
            <form action="" className="Forms">
                <input type="text" className="form-input" placeholder="Ваше имя" />
                <input type="tel" className="form-input" placeholder="+7 999-999-99-99" />
                <Button text={buttonText} className="buttonForm" />
                <p className="warningForm">{warning}</p>
            </form>
        </div>
    );
};

export default ConsultationForm;
