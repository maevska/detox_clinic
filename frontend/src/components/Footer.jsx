import "../styles/Footer.css";
import ConsultationForm from "./ConsultationForm";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-form-container">
                <div className="footer-forms">
                    <ConsultationForm
                        formsTitle="Остались вопросы?"
                        chaptersform="Просто оставь заявку и мы вам перезвоним в близжайшее время"
                        buttonText="Получить консультацию"
                        warning='Нажимая кнопку "Получить консультацию", вы соглашаетесь с политикой конфиденциальности'
                        className="footer-form-update"
                    />
                </div>
                <div className="footer-img">
                    <img src="/images/footerWoman.png" alt="woman-consultation" />
                </div>
            </div>

            <div className="footer-info">
                <p className="footer-info-p">
                    Услуги предоставляются ООО «ДЕТОКС» по лицензии Л041-01177-91/00561129 от 02.02.2022 г. ОГРН - 1182375001511; ИНН: 2312268085
                    <br />
                    295017, Республика Крым, г. Симферополь, ул. Киевская/пр-кт Победы, д. 75/1 (литера А)
                    <br />
                    350000, Краснодарский край, г. Краснодар, тер Западный внутригородской округ, ул. Северная, д. 324, кв. 8, 9, 9/1, 10, 11, 3-й этаж
                    <br />
                    Информация, предоставляемая на данном сайте, не замещает посещения вашего лечащего доктора. Она носит исключительно информационный характер и не является публичной офертой.
                </p>
            </div>
            <div className='footer-warning'>
                <p className='footer-warning-p'>Имеются противопоказания. Проконсультируйтесь с врачом.</p>
            </div>
        </footer>
    );

};

export default Footer;