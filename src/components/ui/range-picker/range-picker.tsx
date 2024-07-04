import css from "./range-picker.module.css";

type Props = {
    from: Date | null;
    to: Date | null;
    onChange: (from: Date | null, to: Date | null) => void;
    required?: boolean;
};

function dateToString(date: Date | null) {
    if (!date) return "";

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function stringToDate(string: string): Date {
    return new Date(string);
}

export function RangePicker(props: Props) {
    return (
        <div className={css.container}>
            <div className={css.labelWrapper}>
                <label className={css.label}>
                    Диапазон поиска {props.required && <span className={css.required}>*</span>}
                </label>
            </div>
            <div className={css.line}>
                <div className={css.dateInputWrapper}>
                    <input
                        type="date"
                        value={dateToString(props.from)}
                        className={css.dateInput}
                        onChange={(ev) => {
                            if (ev.target.value) {
                                props.onChange(stringToDate(ev.target.value), props.to);
                            } else {
                                props.onChange(null, props.to);
                            }
                        }}
                    />
                    <div className={css.arrow}></div>
                </div>
                <div className={css.dateInputWrapper}>
                    <input
                        type="date"
                        value={dateToString(props.to)}
                        className={css.dateInput}
                        onChange={(ev) => {
                            if (ev.target.value) {
                                props.onChange(props.from, stringToDate(ev.target.value));
                            } else {
                                props.onChange(props.from, null);
                            }
                        }}
                    />
                    <div className={css.arrow}></div>
                </div>
            </div>
        </div>
    );
}
