import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import css from "./search-page.module.css";
import rocket from "../../assets/img/rocket.svg";
import { Checkbox } from "../../components/ui/checkbox/checkbox";
import { useState } from "react";
import { Dropdown } from "../../components/ui/dropdown/dropdown";

export function SearchPage() {
    const [maximumCompleteness, setMaximumCompleteness] = useState(false);
    const [mentions, setMentions] = useState(false);
    const [tonality, setTonality] = useState<string | null>(null);

    return (
        <div>
            <Header />
            <div className={css.container}>
                <div className={css.root}>
                    <h1 className={css.title}>Найдите необходимые данные в пару кликов</h1>
                    <h1>Задайте параметры поиска. Чем больше заполните, тем точнее поиск</h1>
                    <img src={rocket} alt="" />
                    <div>
                        <form className={css.form}>
                            <div className={css.tabs}></div>
                            <div>
                                <label>
                                    <p className={css.label}>ИНН компании*</p>
                                    <input className={css.input} type="text" />
                                </label>
                                <label>
                                    <p className={css.label}>Тональность</p>
                                    <input className={css.input} type="list" />
                                </label>
                                <label>
                                    <p className={css.label}>Количество документов в выдаче</p>
                                    <input className={css.input} type="numbers" />
                                </label>
                                <label>
                                    <p className={css.label}>Диапазон поиска</p>
                                    <input className={css.input} type="password" />
                                </label>
                                <Checkbox
                                    label="Признак максимальной полноты"
                                    onChange={(ev) => setMaximumCompleteness(ev.target.checked)}
                                />
                                <Checkbox
                                    label="Упоминания в бизнес-контексте"
                                    onChange={(ev) => setMentions(ev.target.checked)}
                                />
                                <Dropdown
                                    onSelect={(item) => setTonality(item)}
                                    label="Тональность"
                                    suggestions={["Любая", "-", "+"]}
                                    selectedItem={tonality}
                                />
                            </div>
                            <button
                                className={css.signIn}
                                onClick={() => {
                                    console.log("Начался поиск...");
                                }}
                            >
                                Поиск
                            </button>
                            <div className={css.socials}></div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
