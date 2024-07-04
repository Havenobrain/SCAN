import css from "./profi-doc.module.css";
import parse from 'html-react-parser';

type ProfiDocProps = {
    date: Date;
    source: string;
    title: string;
    badge: string;
    img: string;
    text: string;
    wordsCount: string;
};

export function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Исправлено получение месяца
    const day = date.getDate().toString().padStart(2, "0");
    return `${day}.${month}.${year}`;
}

export function ProfiDoc(props: ProfiDocProps) {
    const parsedContent = parse(props.text); // Парсинг XML в HTML

    return (
        <div className={css.root}>
            <div className={css.content}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className={css.date}>{formatDate(props.date)}</div>
                    <div className={css.source}>{props.source}</div>
                </div>
                <div className={css.subtitle}>{props.title}</div>
                <div className={css.badge}>{props.badge}</div>
                <img src={props.img} alt="" />
                <div className={css.text}>
                    {parsedContent}
                </div>
                <div className={css.line}>
                    <button className={css.button}>Читать в источнике</button>
                    <div className={css.words}>{props.wordsCount} слова</div>
                </div>
            </div>
        </div>
    );
}
