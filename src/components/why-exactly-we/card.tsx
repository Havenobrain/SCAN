import timerPath from "../../assets/img/timer.png";
import searchPath from "../../assets/img/search.png";
import securityPath from "../../assets/img/security.png";
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
        if (props.image === "search") {
            return <img className={css.icon} src={searchPath} alt="" />;
        }
        if (props.image === "security") {
            return <img className={css.icon} src={securityPath} alt="" />;
        }

    }

    return (
        <div className={css.card}>
            {renderIcon()}
            <p>{props.text}</p>
        </div>
    );
}
