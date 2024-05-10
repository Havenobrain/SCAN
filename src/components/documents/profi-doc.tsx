import css from "./profi-doc.module.css"

type ProfiDocProps = {
    date: Date
    source: string
    subtitle: string
    badge: string
    img: string
    text: string
    wordsCount: string
}

export function formatDate(date: Date) {
    const year = date.getFullYear()
    const month = date.getMonth().toString().padStart(2, "0")
    const day = date.getDate().toString().padStart(2, "0")
    return `${day}.${month}.${year}`
}

export function ProfiDoc(props: ProfiDocProps) {
    return (
        <div className={css.root}>
            <div className={css.content}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className={css.date}>{formatDate(props.date)}</div>
                    <div className={css.source}>{props.source}</div>
                </div>
                <div className={css.subtitle}>{props.subtitle}</div>
                <div className={css.badge}>{props.badge}</div>
                <img src={props.img} alt="" />
                <p style={{ marginBottom: 20 }} className={css.text}>
                    {props.text}
                </p>
                <div className={css.line}>
                    <button className={css.button}>Читать в источнике</button>
                    <div className={css.words}>{props.wordsCount} слова</div>
                </div>
            </div>
        </div>
    )
}

// export function ProfiDoc() {
//     return (
//         <div className={css.root}>
//             <div className={css.content}>
//                 <div style={{ display: "flex", flexDirection: "row" }}>
//                     <div className={css.date}>13.09.2021</div>
//                     <div className={css.source}>Комсомольская правда KP.RU</div>
//                 </div>
//                 <div className={css.subtitle}>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</div>
//                 <div className={css.badge}>Технические новости</div>
//                 <img src={photo1} alt="" />
//                 <div className={css.text}>
//                     <p style={{ marginBottom: 20 }}>
//                         SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек
//                         из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer,
//                         Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
//                     </p>
//                     <p>
//                         Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения —
//                         выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса.
//                         А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
//                     </p>
//                 </div>
//                 <div className={css.line}>
//                     <button className={css.button}>Читать в источнике</button>
//                     <div className={css.words}>2 543 слова</div>
//                 </div>
//             </div>
//         </div>
//     )
// }
