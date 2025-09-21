import "../styles/ConsultationForm.css";
import Button from "../components/Button";

const ConsultationForm = ({ formsTitle, chaptersform, buttonText, warning, className = "", onClose }) => {
    return (
        <div className={`container-form ${className}`}>
            <div className="headerform">
                <h2 className="form-h2">{formsTitle}</h2>
                {chaptersform && <p className="parag-form">{chaptersform}</p>}
            </div>
            <form
                action=""
                className="Forms"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const name = e.target.name.value;
                    const phone = e.target.phone.value;

                    try {
                        const res = await fetch("http://localhost:8000/consultation", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ name, phone }),
                        });
                        if (res.ok) {
                            window.alert("Спасибо за заявку! Скоро с вами свяжется наш специалист.");
                            if (onClose) onClose();
                        } else {
                            window.alert("Ошибка при отправке формы. Проверьте правильность данных и попробуйте ещё раз.");
                        }
                    } catch (error) {
                        window.alert("Произошла ошибка. Проверьте соединение и повторите попытку.");
                    }
                }}
            >
                <input type="text" name="name" className="form-input" placeholder="Ваше имя" />
                <input type="tel" name="phone" className="form-input" placeholder="+7 999-999-99-99" />
                <Button text={buttonText} className="buttonForm" type="submit" />
                <p className="warningForm">{warning}</p>
            </form>
        </div>
    );
};

export default ConsultationForm;
