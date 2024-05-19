import { useState } from "react";
import css from "./dropdown.module.css";

type Suggestion<T> = {
    displayText: string;
    value: T;
};

type Props<T> = {
    label: string;
    suggestions: Suggestion<T>[];
    selectedItem: string | null;
    onSelect: (item: T) => void;
};

export function Dropdown<T>(props: Props<T>) {
    const [open, setOpen] = useState(false);

    return (
        <div className={css.root}>
            <div onClick={() => setOpen(!open)} className={css.top}>
                <p>{props.selectedItem ? props.selectedItem : "Любая"}</p>{" "}
                <div className={css.triangle} style={{ transform: `rotate(${open ? 0 : 180}deg)` }}></div>
            </div>
            {open && (
                <div className={css.popover}>
                    {props.suggestions.map((suggestion) => (
                        <p
                            onClick={() => {
                                props.onSelect(suggestion.value);
                                setOpen(false);
                            }}
                        >
                            {suggestion.displayText}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}
