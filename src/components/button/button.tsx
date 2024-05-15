import { MouseEventHandler } from "react";
import css from "./button.module.css";

type ButtonProps = {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
};

export function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={css.button} disabled={props.disabled} type="button">
            {props.text}
        </button>
    );
}
