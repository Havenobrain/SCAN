import { ChangeEventHandler } from "react"
import css from "./numeric-field.module.css"

type NumericFieldProps = {
    label: string
    value: string | null
    onChange: ChangeEventHandler<HTMLInputElement>

    placeholder?: string
    required?: boolean
}

export function NumericField(props: NumericFieldProps) {
    return (
        <>
            <label>
                <p className={css.label}>
                    {props.label}
                    {props.required ? "*" : ""}
                </p>
                <input placeholder={props.placeholder} className={css.input} type="number" onChange={(ev) => props.onChange(ev)} />
            </label>
        </>
    )
}
