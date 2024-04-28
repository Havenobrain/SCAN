import css from "./app.module.css";
import { Button } from "./button/button";
import { WhyExactlyWe } from "./why-exactly-we/why-exactly-we";
import { FacePage } from "./facepage/facepage";

export function App() {
    return (
        <div className="App">
            <div className={css.container}>
            <FacePage />
            </div>
            <div className={css.container}>
                <h1 className={css.title}>Hello world! {css.title}</h1>
                <Button text={"Anna"} number={56} color="red" />
                {Button({ text: "Test", number: 56, color: "green" })}
                <WhyExactlyWe />
            </div>
        </div>
    );
}
