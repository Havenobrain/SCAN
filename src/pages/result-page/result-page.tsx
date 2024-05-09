import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import css from "./result-page.module.css";
import woman from "../../assets/img/woman.svg";
import { Documents } from "../../components/documents/documents";


export function ResultPage() {
    return (
        <div className={css.container}>
            <Header />
            <div>
                <h1 className={css.title}>Ищем. Скоро будут результаты</h1>
                <span className={css.label}>Поиск может занять некоторое время, просим сохранять терпение.</span>
                <img src={woman} alt="" />
                <h1 className={css.title}>Общая сводка</h1>
                <h1 className={css.title}>Список документов</h1>
            </div>
            <Documents />
            <Footer />
        </div>
    );
}
