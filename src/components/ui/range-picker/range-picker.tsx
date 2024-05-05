import css from "./range-picker.module.css"

type Props = {
    from: Date | null
    to: Date | null
    onChange: (from: Date | null, to: Date | null) => void
    label: string
    required?: boolean
}

function dateToString(date: Date | null) {
    if (!date) return ""

    const year = date.getFullYear()
    const month = date.getMonth().toString().padStart(2, "0")
    const day = date.getDate().toString().padStart(2, "0")
    return `${year}-${month}-${day}`
}

function stringToDate(string: string): Date {
    return new Date(string)
}

export function RangePicker(props: Props) {
    return (
        <div>
            <div>
                {props.label}
                {props.required ? "*" : ""}
            </div>
            <div className={css.line}>
                <input
                    type="date"
                    value={dateToString(props.from)}
                    onChange={(ev) => {
                        if (ev.target.value) {
                            props.onChange(stringToDate(ev.target.value), props.to)
                        } else {
                            props.onChange(null, props.to)
                        }
                    }}
                />
                <input
                    type="date"
                    value={dateToString(props.to)}
                    onChange={(ev) => {
                        if (ev.target.value) {
                            props.onChange(props.from, stringToDate(ev.target.value))
                        } else {
                            props.onChange(props.from, null)
                        }
                    }}
                />
            </div>
        </div>
    )
}
