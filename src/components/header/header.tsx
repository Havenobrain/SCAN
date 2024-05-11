import css from "./header.module.css"
import logo from "../../assets/img/logo.png"
import avatar from "../../assets/img/avatar.jpg"
import { Link } from "react-router-dom"
import { useState } from "react"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className={css.root}>
            <img className={css.logo} src={logo} alt="" />
            <div className={css.links}>
                <Link className={css.link} to={"/"}>
                    Главная
                </Link>
                <p className={css.link}>Тарифы</p>
                <p className={css.link}>FAQ</p>
            </div>
            <div className={css.card}>
                <p>Использовано компаний </p>
                <p>34</p>
                <p>Лимит по компаниям</p>
                <p>100</p>
            </div>
            <div className={css.profile}>
                <div style={{ textAlign: "right" }}>
                    <p className={css.name}>Алексей А.</p>
                    <button className={css.logout}>Выйти</button>
                </div>
                <img src={avatar} alt="" className={css.avatar} />
            </div>
            <button className={css.burger} onClick={() => setIsMenuOpen(true)}>
                |||
            </button>
            {isMenuOpen && (
                <div className={css.menu}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className={css.logo}>CKAH</div>
                        <button onClick={() => setIsMenuOpen(false)}>X</button>
                    </div>
                    <Link className={css.link} to={"/"}>
                        Главная
                    </Link>
                    <p className={css.link}>Тарифы</p>
                    <p className={css.link}>FAQ</p>
                    <p>Зарегистрироваться </p>
                    <button>Войти</button>
                </div>
            )}
        </div>
    )
}
