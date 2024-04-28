//import { Card } from "./card";
//import css from "./why-exactly-we.module.css";
import mainPath from "../../assets/img/main.png";
import css from "./facepage.module.css";


export function FacePage() {
    return (
        <div>
            <h1 className={css.title}>сервис по поиску публикаций о компании по его ИНН</h1>
            <img className={css.icon} src={mainPath} alt="" />

        </div>
    );
}
