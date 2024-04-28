import css from "./header.module.css";
import avatar from "../../assets/img/avatar.jpg";
import { Link } from "react-router-dom";

export function Header(props: Props) {
    return (
        <div className={css.root}>
            <div className={css.logo}></div>
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
        </div>
    );
}
