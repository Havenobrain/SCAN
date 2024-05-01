import { Card } from "./card";
import css from "./why-exactly-we.module.css";
import imagePath from "../../assets/img/Group 14.png";

export function WhyExactlyWe() {
    return (
        <div className={css.root}>
            <h1 className={css.title}>Почему именно мы</h1>
            <div className={css.line}>
                <Card image="timer" text="Высокая и оперативная скорость обработки заявки" />
                <Card image="search" text="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос" />
                <Card image="security" text="Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству"
                />
            </div>
            <img src={imagePath} alt="" />
        </div>
    );
}
