import css from "./header.module.css";
import logo from "../../assets/img/logo.png";
import logo3 from "../../assets/img/logo3.png";
import burgerIcon from "../../assets/img/burger-icon.svg";
import avatar from "../../assets/img/avatar.jpg";
import close from "../../assets/img/close.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Plate } from "./plate";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={css.root}>
            <img className={css.logo} src={logo} alt="" />
            <div className={css.links}>
                <Link className={css.link} to={"/"}>
                    Главная
                </Link>
                <a href="#tariffs" className={css.link}>
                    Тарифы
                </a>
                <p className={css.link}>FAQ</p>
            </div>
            <Plate /> {/* Plate рендерится здесь и не изменяется при каждом обновлении состояния в SearchPage */}
            <div className={css.profile}>
                <div style={{ textAlign: "right" }}>
                    <p className={css.name}>Алексей А.</p>
                    <button className={css.logout}>Выйти</button>
                </div>
                <img src={avatar} alt="" className={css.avatar} />
            </div>
            <img src={burgerIcon} className={css.burger} onClick={() => setIsMenuOpen(true)} />
            {isMenuOpen && (
                <div className={css.menu}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <img src={logo3} alt="" />
                        <img src={close} onClick={() => setIsMenuOpen(false)} />
                    </div>
                    <div style={{ display: " flex", flexDirection: "column", gap: 26, alignItems: "center", color: "#fff" }}>
                        <Link className={css.link} to={"/"}>
                            Главная
                        </Link>
                        <p className={css.link}>Тарифы</p>
                        <p className={css.link}>FAQ</p>
                    </div>
                    <div style={{ textAlign: "center", marginTop: 75 }}>
                        <p className={css.signUpText}>Зарегистрироваться </p>
                        <button className={css.signInButton}>Войти</button>
                    </div>
                </div>
            )}
        </div>
    );
}
