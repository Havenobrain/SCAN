import css from "./footer.module.css";
import appCss from "../app.module.css";
import logo2 from "../../assets/img/logo2.svg";

export function Footer() {
    return (
        <div className={css.root}>
            <div className={appCss.container}>
                <div className={css.line}>
                    <img className={css.left} src={logo2} />
                    <div className={css.right}>
                        <p style={{ marginBottom: 5 }}>г. Москва, Цветной б-р, 40</p>
                        <p style={{ marginBottom: 5 }}>+7 495 771 21 11</p>
                        <p style={{ marginBottom: 20 }}>info@skan.ru</p>
                        <p>Copyright. 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
