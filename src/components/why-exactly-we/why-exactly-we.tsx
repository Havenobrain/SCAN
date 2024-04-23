import { Card } from "./card";
import css from "./why-exactly-we.module.css";

export function WhyExactlyWe() {
    return (
        <div>
            <h1 className={css.title}>Почему именно мы</h1>
            <div className={css.line}>
                <Card image="timer" text="Высокая и оперативная скорость обработки заявки" />
                <Card image="search" />
                <Card image="security" />
            </div>
        </div>
    );
}
