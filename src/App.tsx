import "./App.css";

export function App() {
    return (
        <div className="App">
            <h1 className={"h1"}>Hello world!</h1>
        </div>
    );
}

export function Button() {
    const Button = () => {
        console.log("Hello!!!");
        return <div>Button</div>;
    };

    return (
        <div className="App">
            <button onClick={Button}>Запросить данные</button>
        </div>
    );
}
