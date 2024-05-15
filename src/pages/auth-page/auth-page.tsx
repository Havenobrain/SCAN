import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import characters from "../../assets/img/Characters.png";
import facebook from "../../assets/img/facebook.png";
import google from "../../assets/img/google.png";
import yandex from "../../assets/img/yandex.png";
import css from "./auth-page.module.css";
import locker from "../../assets/img/locker.png";
import { useState } from "react";
import { Button } from "../../components/button/button";
import { apiProvider } from "../../api-provider/api-provider";
import { localStorageService } from "../../services/local-storage-service/local-storage-service";
import { useNavigate } from "react-router-dom";
import { nav } from "../../services/navigation-service/navigation-service";

export function AuthPage() {
    const [login, setLogin] = useState("sf_student1");
    const [password, setPassword] = useState("4i2385j");
    const [error, setError] = useState("");

    const navigate = useNavigate();

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
                                    <input className={css.input} value={login} onChange={(ev) => setLogin(ev.target.value)} />
                                </label>
                                <label>
                                    <p className={css.label}>Пароль:</p>
                                    <input
                                        className={css.input}
                                        type="password"
                                        value={password}
                                        onChange={(ev) => setPassword(ev.target.value)}
                                    />
                                </label>
                                {error && <p style={{ color: "red", margin: "0 0 12px 0", textAlign: "center" }}>{error}</p>}
                            </div>
                            <Button
                                text="Войти"
                                onClick={async () => {
                                    try {
                                        const data = await apiProvider.login(login, password);
                                        localStorageService.auth.setData(data);
                                        navigate(nav.main);
                                    } catch (error) {
                                        setError((error as Error).message);
                                    }
                                }}
                                disabled={!login || !password}
                            />
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
