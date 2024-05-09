import css from "./prfoi-doc.module.css";
import photo1 from "../../assets/img/photo1.svg";


export function ProfiDoc() {
    return (
        <div className={css.root}>
            <div className={css.content}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className={css.data} >13.09.2021</div>
                    <div className={css.source}>Комсомольская правда KP.RU</div>
                </div>
                    <div className={css.subtitle}>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</div>
                        <div className={css.badge}>Технические новости</div>
                            <img src={photo1} alt="" />
                                <div className={css.text}>
                                        <a>SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. 
                                        С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, 
                                        самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, 
                                        Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
                                        </a>
                                        <a>Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 
                                        80% обучения — выполнение упражнений и реальных проектов. 
                                        Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. 
                                        А карьерный центр помогает составить резюме, подготовиться 
                                        к собеседованиям и познакомиться с IT-рекрутерами.
                                        </a>
                                </div>
                <div className={css.words}>2 543 слова</div>
                <button className={css.button}>Читать в источнике</button>
            </div>
        </div>
    );
}
