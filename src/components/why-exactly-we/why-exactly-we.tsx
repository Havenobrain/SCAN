import { Card } from "./card";
import css from "./why-exactly-we.module.css";
import imagePath from "../../assets/img/Group 14.png";
import { useSlider } from "./use-slider";
import chevron2 from "../../assets/img/chevron-right.png";
import { useEffect, useState } from "react";

const cardData = [
    { id: 1, image: "timer", text: "Высокая и оперативная скорость обработки заявки" },
    { id: 2, image: "search", text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос" },
    { id: 3, image: "security", text: "Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству" },
    { id: 4, image: "security", text: "1" },
    { id: 5, image: "security", text: "2" },
    { id: 6, image: "security", text: "3" },
    { id: 7, image: "security", text: "4" },
];

export const useBodyWidth = () => {
    const [width, setWidth] = useState(1920);

    useEffect(() => {
        const handleResize = () => {
            setWidth(document.body.getBoundingClientRect().width);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
};

export function WhyExactlyWe() {
    const width = useBodyWidth();

    const getVisibleIndexes = () => {
        if (width < 800) return 1;
        if (width < 1000) return 2;
        return 3;
    };

    const { goLeft, goRight, visibleIndexes } = useSlider(getVisibleIndexes(), cardData.length);

    return (
        <div className={css.root}>
            <h1 className={css.title}>Почему именно мы</h1>
            <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 70 }}>
                <button
                    className={css.arrow}
                    style={{ transform: `rotate(${180}deg)` }}
                    disabled={!goLeft}
                    onClick={() => {
                        if (goLeft) goLeft();
                    }}
                >
                    <img src={chevron2} alt="" />
                </button>
                <div className={css.line}>
                    {cardData.map((card, i) => {
                        if (visibleIndexes.includes(i)) {
                            return (
                                <Card
                                    key={card.id}
                                    image={card.image}
                                    text={card.text}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
                <button
                    className={css.arrow}
                    disabled={!goRight}
                    onClick={() => {
                        if (goRight) goRight();
                    }}
                >
                    <img src={chevron2} alt="" />
                </button>
            </div>
            <img src={imagePath} alt="" />
        </div>
    );
}
