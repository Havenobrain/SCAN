import { Card } from "./card"
import css from "./why-exactly-we.module.css"
import imagePath from "../../assets/img/Group 14.png"
import { useState } from "react"

const cards = [
    <Card image="timer" text="Высокая и оперативная скорость обработки заявки" />,
    <Card image="search" text="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос" />,
    <Card image="security" text="Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству" />,
    <Card image="security" text="Тестовая карточка" />,
]

export function WhyExactlyWe() {
    const [visibleIndexes, setVisibleIndexes] = useState([0, 1, 2])

    function goRight() {
        //[0, 1, 2] -> [1, 2, 3]
        const last = visibleIndexes[visibleIndexes.length - 1]
        const copy = visibleIndexes.map((x) => x)

        copy.shift()
        copy.push(last)

        setVisibleIndexes(copy)
    }

    function goLeft() {
        //[0, 1, 2] <- [1, 2, 3]
    }

    return (
        <div className={css.root}>
            <h1 className={css.title}>Почему именно мы</h1>
            <button onClick={() => goLeft()}>Влево</button>
            <div className={css.line}>
                {cards.map((card, i) => {
                    if (visibleIndexes.includes(i)) return card
                })}
            </div>
            <button onClick={() => goRight()}>Вправо</button>
            <img src={imagePath} alt="" />
        </div>
    )
}
