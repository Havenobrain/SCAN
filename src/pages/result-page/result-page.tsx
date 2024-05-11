import { Footer } from "../../components/footer/footer"
import { Header } from "../../components/header/header"
import css from "./result-page.module.css"
import woman from "../../assets/img/woman.svg"
import { Documents } from "../../components/documents/documents"
import { formatDate } from "../../components/documents/profi-doc"
import { useSlider } from "../../components/why-exactly-we/use-slider"
import chevron2 from "../../assets/img/chevron-right.png"

type Variant = {
    date: Date
    total: number
    risks: number
}

const variants: Variant[] = [
    { date: new Date(), risks: 1, total: 1 },
    { date: new Date(), risks: 2, total: 2 },
    { date: new Date(), risks: 3, total: 3 },
    { date: new Date(), risks: 4, total: 4 },
    { date: new Date(), risks: 5, total: 5 },
    { date: new Date(), risks: 6, total: 6 },
    { date: new Date(), risks: 7, total: 7 },
    { date: new Date(), risks: 8, total: 8 },
    //
    { date: new Date(), risks: 9, total: 9 },
    { date: new Date(), risks: 10, total: 10 },
    { date: new Date(), risks: 11, total: 11 },
    { date: new Date(), risks: 12, total: 12 },
    { date: new Date(), risks: 13, total: 13 },
    { date: new Date(), risks: 14, total: 14 },
    { date: new Date(), risks: 15, total: 15 },
    { date: new Date(), risks: 16, total: 16 },
    { date: new Date(), risks: 17, total: 17 },
    { date: new Date(), risks: 18, total: 18 },
    { date: new Date(), risks: 19, total: 19 },
    { date: new Date(), risks: 20, total: 20 },
]

export function ResultPage() {
    const { goLeft, goRight, visibleIndexes } = useSlider(8, 20)

    return (
        <div className={css.container}>
            <Header />
            <div>
                <h1 className={css.title}>Ищем. Скоро будут результаты</h1>
                <span className={css.label}>Поиск может занять некоторое время, просим сохранять терпение.</span>
                <img src={woman} alt="" />
                <h1 className={css.title}>Общая сводка</h1>
                    <div className={css.arrow} style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 70 }}>
                        <button
                            style={{transform: `rotate(${180}deg)` }}
                            disabled={!goLeft}
                            onClick={() => {
                                if (goLeft) goLeft()
                            }}
                        >
                            <img src={chevron2} alt="" />
                        </button>
                        <div className={css.table}>
                            <div className={css.legend}>
                                <p>Период</p>
                                <p>Всего</p>
                                <p>Риски</p>
                            </div>
                            {variants.map((variant, i) => {
                                if (visibleIndexes.includes(i)) {
                                    return (
                                        <div className={css.column}>
                                            <p>{formatDate(variant.date)}</p>
                                            <p>{variant.total}</p>
                                            <p>{variant.risks}</p>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <button
                            disabled={!goRight}
                            onClick={() => {
                                if (goRight) goRight()
                            }}
                        >
                            <img src={chevron2} alt="" />
                        </button>
                    </div>
                <h1 className={css.title}>Список документов</h1>
            </div>
            <Documents />
            <Footer />
        </div>
    )
}
