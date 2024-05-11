import css from "./pro-card.module.css"

export function ProCard() {
    return (
        <div className={css.root}>
            <div className={css.header}>
                <div className={css.title}>Pro</div>
                <div className={css.subtitle}>Для HR и фрилансеров</div>
            </div>
            <div className={css.content}>
                <p>
                    <span className={css.newPrice}>1 299 ₽</span>
                    <span className={css.oldPrice}>2 600 ₽</span>
                </p>
                <p className={css.text}>или 279 ₽/мес. при рассрочке на 24 мес.</p>
                <div style={{ flex: 1 }}>
                    <p className={css.text} style={{ marginBottom: 10 }}>
                        В тариф входит:
                    </p>
                    <ul>
                        <li className={css.li}>Все пункты тарифа Beginner</li>
                        <li className={css.li}>Экспорт истории</li>
                        <li className={css.li}>Рекомендации по приоритетам</li>
                    </ul>
                </div>
                <button className={css.button}>Подробнее</button>
            </div>
        </div>
    )
}
