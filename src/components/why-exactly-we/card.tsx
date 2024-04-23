import timerPath from "../../assets/img/timer.png";
import css from "./card.module.css";

type CardProps = {
    text: string;
    image: string;
};

export function Card(props: CardProps) {
    function renderIcon() {
        if (props.image === "timer") {
            return <img className={css.icon} src={timerPath} alt="" />;
        }
    }

    return (
        <div className={css.card}>
            {renderIcon()}
            <p>{props.text}</p>
        </div>
    );
}
