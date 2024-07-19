import css from "./result-page.module.css";
import woman from "../../assets/img/woman.svg";
import Documents from "../../components/documents/documents";
import { formatDate } from "../../components/documents/profi-doc";
import { useSlider } from "../../components/why-exactly-we/use-slider";
import chevron2 from "../../assets/img/chevron-right.png";
import { useBodyWidth } from "../../components/why-exactly-we/why-exactly-we";
import { useLocation } from "react-router-dom";
import { HistogramsPayload } from "../../api-provider/histograms";
import { HistogramEntry } from "../../api-provider/histograms-payload";
import { apiProvider } from "../../api-provider/api-provider";
import { useEffect, useState } from "react";


export function ResultPage() {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [variants, setVariants] = useState<HistogramEntry[]>([]);
    const { state } = useLocation()

    useEffect(() => {
        const { payload } = state
        async function getVariants(payload: HistogramsPayload) {
            try {
                setLoading(true)
                const { data } = await apiProvider.objectsearch.histograms(payload)
                setVariants(data.length ? data[0].data : [])
            } catch (err) {
                const error = err as Error
                setError(error.message || 'Error while fetching data')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        if (!variants?.length && !isLoading) {
            
            getVariants(payload)
        }
    }, []);


    const width = useBodyWidth();
    const getIndexes = () => {
        if (width < 400) return 1;
        if (width < 600) return 2;
        if (width < 900) return 4;
        return 6;
    };
    const { goLeft, goRight, visibleIndexes } = useSlider(getIndexes(), 20);

    return (
        <div className={css.container}>
            <div>
                <h1 className={css.title}>Ищем. Скоро будут результаты</h1>
                <span className={css.label}>Поиск может занять некоторое время, просим сохранять терпение.</span>
                <img src={woman} alt="" />
                <h1 className={css.title}>Общая сводка</h1>
                {isLoading ? <p>Loading...</p> : error ? <p style={{ color: "red" }}>{error}</p> :
                    <div className={css.arrow} style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 70 }}>
                        <button
                            style={{ transform: `rotate(${180}deg)` }}
                            disabled={!goLeft}
                            onClick={() => {
                                if (goLeft) goLeft();
                            }}
                        >
                            <img src={chevron2} alt="" />
                        </button>
                        <div className={css.table}>
                            <div className={css.legend}>
                                <p>Период</p>
                                <p>Всего</p>
                            </div>
                            {variants.map((variant, i) => {
                                if (visibleIndexes.includes(i)) {
                                    return (
                                        <div key={`${variant.date}_${i}`} className={css.column}>
                                            {<p>{formatDate(variant.date)}</p>}
                                            <p>{variant.value}</p>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <button
                            disabled={!goRight}
                            onClick={() => {
                                if (goRight) goRight();
                            }}
                        >
                            <img src={chevron2} alt="" />
                        </button>
                    </div>
                }
                <h1 className={css.title}>Список документов</h1>
            </div >
            <div className={css.documentsRow}>
            </div>
            <Documents />
        </div>
    );
}
