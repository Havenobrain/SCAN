import { ChangeEventHandler } from "react";

type Props = {
    label: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

export function Checkbox(props: Props) {
    return (
        <label style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <input style={{ flexBasis: "min-content" }} type="checkbox" onChange={(ev) => props.onChange(ev)} />
            <p>{props.label}</p>
        </label>
    );
}

type User<T> = {
    id: T;
    name: string;
};

const user1: User<string> = {
    id: "",
    name: "",
};

const user2: User<boolean> = {
    id: true,
    name: "",
};
