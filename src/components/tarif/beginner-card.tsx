import css from "./beginner-card.module.css";

type Props = {};

export function BeginnerCard(props: Props) {
    return (
        <div className={css.root}>
            <div className={css.header}>
                <div className={css.title}>Beginner</div>
                <div className={css.subtitle}>Для небольшого исследования</div>
            </div>
            <div className={css.content}>
                <div className={css.badge}>Текущий тариф</div>
                <p>
                    <span className={css.newPrice}>799 ₽</span>
                    <span className={css.oldPrice}>1200 ₽</span>
                </p>
                <p className={css.text}>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                <p style={{ marginBottom: 10 }}>В тариф входит:</p>
                <ul>
                    <li className={css.li}>Все пункты тарифа Pro</li>
                    <li className={css.li}>Безлимитное количество запросов</li>
                    <li className={css.li}>Приоритетная поддержка</li>
                </ul>
                <button className={css.button}>Перейти в личный кабинет</button>
            </div>
        </div>
    );
}
