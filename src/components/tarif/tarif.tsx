import { BeginnerCard } from "./beginner-card";
import css from "./tarif.module.css";

export function Tarif() {
    return (
        <div>
            <h1 className={css.title}>НАШИ ТАРИФЫ</h1>
            <div className={css.cards}>
                <BeginnerCard />
                <BeginnerCard />
                <BeginnerCard />
            </div>
        </div>
    );
}
