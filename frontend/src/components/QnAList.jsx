import QnA from "./QnA";
import "../styles/QnAList.css"
import QnAData from "../data/QnAData";

const QnAList = () => {
    return (
        <div className="qna-list">
            <h2 className="qna-title">Частые вопросы и ответы</h2>
            {QnAData.map((item, idx) => (
                <QnA key={idx} question={item.q} answer={item.a} />
            ))}
        </div>
    );
};

export default QnAList;