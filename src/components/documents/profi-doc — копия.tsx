
import css from "./profi-doc.module.css";
import photo1 from "../../assets/img/photo1.svg";
import { ScanDoc } from "./scan-doc";
import { useEffect, useState } from 'react';


export function formatDate(date: Date | string) {
    if (typeof date === "string") {
        date = new Date(date)
    }
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${day}.${month}.${year}`;
}

declare type Params = {doc: ScanDoc}


export function ProfiDoc({doc}: Params) {
    const document = doc.ok
    const DOMParse = new DOMParser();
    const [content, setContent] = useState('');
    useEffect(() => {
        const xmlDoc = DOMParse.parseFromString(document.content.markup, 'application/xml');
        const htmlContent = new XMLSerializer().serializeToString(xmlDoc.documentElement)
        setContent(htmlContent)
      }, []);

    return doc.ok ? (
        <div className={css.root}>
            <div className={css.content}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className={css.data} >{formatDate(document.issueDate)}</div>
                    <div className={css.source}>{document.source.name}</div>
                </div>
                    <div className={css.subtitle}>{document.title.text}</div>
                        {document.attributes.isTechNews && <div className={css.badge}>Технические новости</div>}
                        {document.attributes.isAnnouncement && <div className={css.badge}>Анонсы</div>}
                        {document.attributes.isDigest && <div className={css.badge}>Дайджесты</div>}
                            {/* <img src={photo1} alt="" /> */}
                            <div className={css.text} dangerouslySetInnerHTML={{__html: content}}></div>
                <div className={css.words}>{document.attributes.wordCount} слов(а)</div>
                <a href={document.url}><button className={css.button}>Читать в источнике</button></a>
            </div>
        </div>
    ): null
}
