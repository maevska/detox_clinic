import "../styles/InformClinic.css";

const InformClinic = () => {
    return (
        <div className="inform-container">
            <div className="inform-all">
                <div className="inform-header">
                    <div className="text-header-inf">
                        <h2 className="inform-title">О клинике</h2>
                        <p className="inform-p">
                            Наши квалифицированные врачи и наркологи предлагают широкий спектр наркологических услуг, 
                            включая стационарное лечение, кодирование, и многие другие виды лечения. Мы заботимся о каждом пациенте
                            и гарантируем высокое качество нашей работы. Не стесняйтесь обращаться к нам в любое время, мы всегда готовы
                            оказать наркологическую помощь.
                        </p>
                        <ul className="inform-ul">
                            <li className="inform-li">Квалифицированные врачи-наркологи</li>
                            <li className="inform-li">Находим решение даже в сложных ситуациях</li>
                            <li className="inform-li">Используем импортные проверенные препараты</li>
                            <li className="inform-li">Лицензия Л041-01177-91/00561129</li>
                        </ul>
                    </div>

                    <div className="img-header-inf">
                        <img src="/images/about_clinic.png" alt="Врач в клинике" />
                    </div>
                </div>

                <div className="inform-footer">
                    <p className="doc-p">Имеем все необходимые документы для предоставления медицинских услуг:</p>
                    <div className="doc-img">
                        <img src="/images/image 278.png" alt="Документ 1 - лицензия" />
                        <img src="/images/image 279.png" alt="Документ 2 - лицензия" />
                        <img src="/images/image 280.png" alt="Документ 3 - лицензия" />
                        <img src="/images/image 281.png" alt="Документ 4 - лицензия" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformClinic;
