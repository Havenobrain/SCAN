import { ChangeEventHandler } from "react";
import css from "./checkbox.module.css";
import tick from "../../../assets/img/icons8-галочка-96 4.png";

type Props = {
    label: string;
    checked: boolean; // Изменение здесь
    onChange: ChangeEventHandler<HTMLInputElement>;
};

export function Checkbox(props: Props) {
    return (
        <label style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <input
                className={css.input}
                style={{ flexBasis: "min-content" }}
                checked={props.checked} // Изменение здесь
                type="checkbox"
                onChange={(ev) => props.onChange(ev)}
            />
            <div className={css.checkbox}>
                <img className={css.photo} src={tick} alt="" />
            </div>
            <p className={css.text}>{props.label}</p>
        </label>
    );
}
