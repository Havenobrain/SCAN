// const user: { name: string; id: number } = { id: 1, name: "" };
// props - properties - свойства

type ButtonProps = {
    text: string;
    number: number;
    color: string;
};

export function Button(props: ButtonProps) {
    function onClick() {
        console.log(props.text);
    }

    return (
        <button onClick={onClick} style={{ color: props.color }}>
            Запросить данные {props.text} {props.number} 
        </button>
    );
}
