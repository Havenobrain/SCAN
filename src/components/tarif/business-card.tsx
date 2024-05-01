import css from "./business-card.module.css";

export function BusinessCard() {
    return (
        <div className={css.root}>
            <div className={css.header}>
                <div className={css.title}>Business</div>
                <div className={css.subtitle}>Для корпоративных клиентов</div>
            </div>
            <div className={css.content}>
                <p>
                    <span className={css.newPrice}>2 379 ₽</span>
                    <span className={css.oldPrice}>3 700 ₽</span>
                </p>
                <p className={css.text} style={{ marginBottom: 10 }}>
                    В тариф входит:
                </p>
                <ul>
                    <li className={css.li}>Все пункты тарифа Pro</li>
                    <li className={css.li}>Безлимитное количество запросов</li>
                    <li className={css.li}>Приоритетная поддержка </li>
                </ul>
                <button className={css.button}>Подробнее</button>
            </div>
        </div>
    );
}
