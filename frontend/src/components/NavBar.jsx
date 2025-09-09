import "../styles/NavBar.css";
import Button from '../components/Button';

const NavBar = () => {
    return (
        <nav className='navigation'>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="/images/Logo.png" alt="Logo" className="image-logo" />
                </div>
                <div className="navbar-menu">
                    <ul className="menu-list">
                        <li>Услуги</li>
                        <li>Этапы лечения</li>
                        <li>О нас</li>
                        <li>Отзывы</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className="navbar-contacts">
                    <div className="contact-phone">
                        <strong>8 (906) 180-00-41</strong>
                        <span>Работаем 24/7</span>
                    </div>
                    <div className="contact-btn">
                        <Button text='Заказать звонок' />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;