import React from 'react';
import "../styles/Header.css";
import Button from '../components/Button';

const Header = () => {
    return (
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
                        <Button className="header-button-left" text="Получить помощь" />
                        <Button className="header-button-right" text="Заказать звонок" />
                    </div>
                </div>
                <img src="/images/clinic.png" alt="clinik" className="header-img-right" />
                <img src="/images/woman.png" alt="woman" className="header-woman" />
            </div>
        </header>
    );
};

export default Header;