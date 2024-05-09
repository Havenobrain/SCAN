import css from "./work-doc.module.css";
import photo2 from "../../assets/img/photo2.svg";


export function WorkDoc() {
    return (
        <div className={css.root}>
            <div className={css.content}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className={css.data} >15.10.2021</div>
                    <div className={css.source}>VC.RU</div>
                </div>
                    <div className={css.subtitle}>Работа в Data Science в 2022 году: тренды, навыки и обзор специализаций</div>
                        <div className={css.badge}>Технические новости</div>
                            <img src={photo2} alt="" />
                                <div className={css.text}>
                                        <a>Кто такой Data Scientist и чем он занимается?
                                            Data Scientist — это специалист, который работает с 
                                            большими массивами данных, чтобы с их помощью решить 
                                            задачи бизнеса. Простой пример использования больших 
                                            данных и искусственного интеллекта — умные ленты в 
                                            социальных сетях. На основе ваших просмотров и лайков 
                                            алгоритм выдает рекомендации с контентом, который может 
                                            быть вам интересен. Эту модель создал и обучил дата-сайентист, 
                                            и скорее всего, не один.
                                        </a>
                                        <a>В небольших компаниях и стартапах дата-сайентист делает все: 
                                            собирает и очищает данные, создает математическую модель для 
                                            их анализа, тестирует ее и презентует готовое решение бизнесу.
                                        </a>
                                </div>
                <div className={css.words}>3 233 слова</div>
                <button className={css.button}>Читать в источнике</button>
            </div>
        </div>
    );
}
