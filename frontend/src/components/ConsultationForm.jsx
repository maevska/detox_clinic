import "../styles/ConsultationForm.css";
import Button from "../components/Button";

const ConsultationForm = ({ formsTitle, chaptersform, buttonText, warning, className = "" }) => {
    return (
        <div className={`container-form ${className}`}>
            <div className="headerform">
                <h2 className="form-h2">{formsTitle}</h2>
                {chaptersform && <p className="parag-form">{chaptersform}</p>}
            </div>
            <form action="" className="Forms"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const name = e.target[0].value;
                    const phone = e.target[1].value;
                    const res = await fetch("http://localhost:8000/consultation", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ name, phone }),
                    });
                    const data = await res.json();
                }}>
                <input type="text" className="form-input" placeholder="Ваше имя" />
                <input type="tel" className="form-input" placeholder="+7 999-999-99-99" />
                <Button text={buttonText} className="buttonForm" />
                <p className="warningForm">{warning}</p>
            </form>
        </div>
    );
};

export default ConsultationForm;
