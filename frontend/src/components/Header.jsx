import {useState} from 'react';
import "../styles/Header.css";
import Button from '../components/Button';
import ConsultationForm from "../components/ConsultationForm";
import Modal from "../components/Modal";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className='header'>
                <div className="header-all">
                    <div className="header-left">
                        <h1 className="header-h1">Срочный вызов врача-нарколога</h1>
                        <ul className="header-ul">
                            <li className="header-li">Сохраняем анонимность, не требуем паспорт и не ставим на учёт</li>
                            <li className="header-li">Помощь квалифицированного врача на дому</li>
                            <li className="header-li">Приедем на адрес за 20 минут</li>
                            <li className="header-li">Первичная консультация - бесплатно</li>
                        </ul>
                        <div className="header-button">
                            <Button className="header-button-left" text="Получить помощь" onClick={() => setIsModalOpen(true)}/>
                            <Button className="header-button-right" text="Заказать звонок" onClick={() => setIsModalOpen(true)} />
                        </div>
                    </div>
                    <img src="/images/clinic.png" alt="clinik" className="header-img-right" />
                    <img src="/images/woman.png" alt="woman" className="header-woman" />
                </div>
            </header>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ConsultationForm
                    formsTitle="Заказать звонок"
                    chaptersform="Просто оставьте заявку и мы вам перезвоним в ближайшее время"
                    buttonText="Отправить"
                    warning='Нажимая кнопку "Получить консультацию", вы соглашаетесь с политикой конфиденциальности'
                />
            </Modal>
        </>
    );
};

export default Header;