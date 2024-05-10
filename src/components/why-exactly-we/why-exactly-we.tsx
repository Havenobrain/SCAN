import { Card } from "./card"
import css from "./why-exactly-we.module.css"
import imagePath from "../../assets/img/Group 14.png"
import { useSlider } from "./use-slider"

const cards = [
    <Card image="timer" text="Высокая и оперативная скорость обработки заявки" />,
    <Card image="search" text="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос" />,
    <Card image="security" text="Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству" />,
    <Card image="security" text="1" />,
    <Card image="security" text="2" />,
    <Card image="security" text="3" />,
    <Card image="security" text="4" />,
]

export function WhyExactlyWe() {
    const { goLeft, goRight, visibleIndexes } = useSlider(3, cards.length)

    return (
        <div className={css.root}>
            <h1 className={css.title}>Почему именно мы</h1>
            <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 70 }}>
                <button
                    disabled={!goLeft}
                    onClick={() => {
                        if (goLeft) goLeft()
                    }}
                >
                    Влево
                </button>
                <div className={css.line}>
                    {cards.map((card, i) => {
                        if (visibleIndexes.includes(i)) return card
                    })}
                </div>
                <button
                    disabled={!goRight}
                    onClick={() => {
                        if (goRight) goRight()
                    }}
                >
                    Вправо
                </button>
            </div>
            <img src={imagePath} alt="" />
        </div>
    )
}
