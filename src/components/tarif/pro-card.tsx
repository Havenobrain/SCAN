import css from "./pro-card.module.css";

type Props = {};

export function ProCard(props: Props) {
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
                <p className={css.text} style={{ marginBottom: 10 }}>В тариф входит:</p>
                <ul>
                    <li className={css.li}>Все пункты тарифа Beginner</li>
                    <li className={css.li}>Экспорт истории</li>
                    <li className={css.li}>Рекмоендации по приоритетам</li>
                </ul>
                <button className={css.button}>Подробнее</button>
            </div>
        </div>
    );
}
