import { FacePage } from "../components/facepage/facepage";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Tarif } from "../components/tarif/tarif";
import { WhyExactlyWe } from "../components/why-exactly-we/why-exactly-we";
import css from "../components/app.module.css";

export function MainPage() {
    return (
        <>
            <div className={css.container}>
                <Header />
                <FacePage />
                <WhyExactlyWe />
                <Tarif />
            </div>
            <Footer />
        </>
    );
}
