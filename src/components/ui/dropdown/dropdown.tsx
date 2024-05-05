import { useState } from "react";
import css from "./dropdown.module.css";


type Props = {
    label: string;
    suggestions: string[];
    selectedItem: string | null;
    onSelect: (item: string) => void;
};

export function Dropdown(props: Props) {
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
                                props.onSelect(suggestion);
                                setOpen(false);
                            }}
                        >
                            {suggestion}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}
