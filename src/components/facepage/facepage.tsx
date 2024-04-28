import css from "./facepage.module.css";

export function FacePage() {
    return (
        <div className={css.root}>
            <div className={css.left}>
                <h1 className={css.title}>сервис по поиску публикаций о компании по его ИНН</h1>
                <p className={css.text}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>

                <button>Запросить данные</button>
            </div>
        </div>
    );
}
