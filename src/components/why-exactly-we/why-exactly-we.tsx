import { Card } from "./card"
import css from "./why-exactly-we.module.css"
import imagePath from "../../assets/img/Group 14.png"
import { useSlider } from "./use-slider"
import chevron2 from "../../assets/img/chevron-right.png"
import { useEffect, useState } from "react"

const cards = [
    <Card image="timer" text="Высокая и оперативная скорость обработки заявки" />,
    <Card image="search" text="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос" />,
    <Card image="security" text="Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству" />,
    <Card image="security" text="1" />,
    <Card image="security" text="2" />,
    <Card image="security" text="3" />,
    <Card image="security" text="4" />,
]

export const useBodyWidth = () => {
    const [width, setWidth] = useState(1920)

    useEffect(() => {
        window.addEventListener("resize", (ev) => {
            setWidth(document.body.getBoundingClientRect().width)
        })
    }, [])

    return width
}

export function WhyExactlyWe() {
    const width = useBodyWidth()

    const getVisibleIndexes = () => {
        if (width < 800) return 1
        if (width < 1000) return 2
        return 3
    }

    const { goLeft, goRight, visibleIndexes } = useSlider(getVisibleIndexes(), cards.length)

    return (
        <div className={css.root}>
            <h1 className={css.title}>Почему именно мы</h1>
            <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 70 }}>
                <button
                    className={css.arrow}
                    style={{ transform: `rotate(${180}deg)` }}
                    disabled={!goLeft}
                    onClick={() => {
                        if (goLeft) goLeft()
                    }}
                >
                    <img src={chevron2} alt="" />
                </button>
                <div className={css.line}>
                    {cards.map((card, i) => {
                        if (visibleIndexes.includes(i)) return card
                    })}
                </div>
                <button
                    className={css.arrow}
                    disabled={!goRight}
                    onClick={() => {
                        if (goRight) goRight()
                    }}
                >
                    <img src={chevron2} alt="" />
                </button>
            </div>
            <img src={imagePath} alt="" />
        </div>
    )
}
