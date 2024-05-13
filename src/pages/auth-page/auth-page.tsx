import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import characters from "../../assets/img/Characters.png";
import facebook from "../../assets/img/facebook.png";
import google from "../../assets/img/google.png";
import yandex from "../../assets/img/yandex.png";
import css from "./auth-page.module.css";
import locker from "../../assets/img/locker.png";

export function AuthPage() {
    return (
        <>
            <div className={css.container} style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <Header />
                <div className={css.content} style={{ flexGrow: 1, display: "flex", alignItems: "center", margin: "20px 0" }}>
                    <div className={css.left}>
                        <h1 className={css.title}>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
                        <img src={characters} alt="" />
                    </div>
                    <div className={css.right}>
                        <form className={css.form}>
                            <img src={locker} alt="" className={css.locker} />
                            <div className={css.tabs}>
                                <div className={css.tab}>Войти</div>
                                <div className={css.tab}>Зарегистрироваться</div>
                            </div>
                            <div>
                                <label>
                                    <p className={css.label}>Логин или номер телефона:</p>
                                    <input className={css.input} type="text" />
                                </label>
                                <label>
                                    <p className={css.label}>Пароль:</p>
                                    <input className={css.input} type="password" />
                                </label>
                            </div>
                            <button className={css.signIn}>Войти</button>
                            <p className={css.reset}>Восстановить пароль</p>
                            <p className={css.signInText}>Войти через:</p>
                            <div className={css.socials}>
                                <div className={css.social}>
                                    <img src={google} alt="" />
                                </div>
                                <div className={css.social}>
                                    <img src={facebook} alt="" />
                                </div>
                                <div className={css.social}>
                                    <img src={yandex} alt="" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
