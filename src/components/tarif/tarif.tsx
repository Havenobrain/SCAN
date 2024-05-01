import { BeginnerCard } from "./beginner-card";
import { ProCard } from "./pro-card";
import { BusinessCard } from "./business-card";
import css from "./tarif.module.css";

export function Tarif() {
    return (
        <div>
            <h1 className={css.title}>НАШИ ТАРИФЫ</h1>
            <div className={css.cards}>
                <BeginnerCard />
                <ProCard />
                <BusinessCard />
            </div>
        </div>
    );
}
