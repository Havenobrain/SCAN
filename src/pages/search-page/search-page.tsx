import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import css from "./search-page.module.css";
import rocket from "../../assets/img/rocket.svg";
import { Checkbox } from "../../components/ui/checkbox/checkbox";
import { useState } from "react";
import { Dropdown } from "../../components/ui/dropdown/dropdown";
import { NumericField } from "../../components/ui/numeric-field/numeric-field";
import { RangePicker } from "../../components/ui/range-picker/range-picker";
import { initialData } from "../result-page/use-payload";
import { useImmer } from "use-immer";
import { apiProvider } from "../../api-provider/api-provider";

export function SearchPage() {
    const [payload, updatePayload] = useImmer(initialData);

    const isDisabled = () => {
        if (!payload.searchContext.targetSearchEntitiesContext.targetSearchEntities[0].inn) return true;
        return false;
    };

    return (
        <div>
            <div className={[css.container, css.bg].join(" ")}>
                <Header />
                <div className={css.root}>
                    <h1 className={css.title}>
                        Найдите необходимые <br /> данные в пару кликов
                    </h1>
                    <h1 className={css.label}>
                        Задайте параметры поиска. <br /> Чем больше заполните, тем точнее поиск
                    </h1>
                    <div>
                        <form className={css.form}>
                            <div>
                                <NumericField
                                    value={payload.searchContext.targetSearchEntitiesContext.targetSearchEntities[0].inn.toString()}
                                    onChange={(ev) =>
                                        updatePayload((draft) => {
                                            draft.searchContext.targetSearchEntitiesContext.targetSearchEntities[0].inn =
                                                +ev.target.value;
                                        })
                                    }
                                    required
                                    label="ИНН компании"
                                    placeholder="placeholder"
                                />

                                <label>
                                    <p className={css.label}>Тональность</p>
                                    <div className={css.label}>
                                        {(() => {
                                            const suggestions = [
                                                { displayText: "Любая", value: "any" },
                                                { displayText: "Положительная", value: "positive" },
                                                { displayText: "Отрицательная", value: "negative" },
                                            ];
                                            return (
                                                <Dropdown
                                                    onSelect={(item) => {
                                                        updatePayload((draft) => {
                                                            draft.searchContext.targetSearchEntitiesContext.tonality = item;
                                                        });
                                                    }}
                                                    label="Тональность"
                                                    suggestions={suggestions}
                                                    selectedItem={
                                                        suggestions.find(
                                                            (s) =>
                                                                s.value ===
                                                                payload.searchContext.targetSearchEntitiesContext.tonality
                                                        )?.displayText ?? ""
                                                    }
                                                />
                                            );
                                        })()}
                                    </div>
                                </label>
                                <label>
                                    <p className={css.label}>Количество документов в выдаче</p>
                                    <input
                                        className={css.input}
                                        type="numbers"
                                        value={payload.limit}
                                        onChange={(ev) => {
                                            updatePayload((draft) => {
                                                draft.limit = Number(ev.target.value);
                                            });
                                        }}
                                    />
                                </label>
                                <RangePicker
                                    label="Диапазон поиска"
                                    required
                                    from={new Date(payload.issueDateInterval.startDate)}
                                    to={new Date(payload.issueDateInterval.endDate)}
                                    onChange={(from, to) => {
                                        updatePayload((draft) => {
                                            draft.issueDateInterval.startDate = from?.toISOString() ?? "";
                                            draft.issueDateInterval.endDate = to?.toISOString() ?? "";
                                        });
                                    }}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className={css.checks}>
                                    <Checkbox
                                        label="Признак максимальной полноты"
                                        value={
                                            payload.searchContext.targetSearchEntitiesContext.targetSearchEntities[0].maxFullness
                                        }
                                        onChange={(ev) => {
                                            updatePayload((draft) => {
                                                draft.searchContext.targetSearchEntitiesContext.targetSearchEntities[0].maxFullness =
                                                    ev.target.checked;
                                            });
                                        }}
                                    />
                                    <Checkbox
                                        label="Упоминания в бизнес-контексте"
                                        value={
                                            payload.searchContext.targetSearchEntitiesContext.targetSearchEntities[0]
                                                .inBusinessNews
                                        }
                                        onChange={(ev) => {
                                            updatePayload((draft) => {
                                                draft.searchContext.targetSearchEntitiesContext.targetSearchEntities[0].inBusinessNews =
                                                    ev.target.checked;
                                            });
                                        }}
                                    />
                                    <Checkbox
                                        label="Главная роль в публикации"
                                        value={payload.searchContext.targetSearchEntitiesContext.onlyMainRole}
                                        onChange={(ev) => {
                                            updatePayload((draft) => {
                                                draft.searchContext.targetSearchEntitiesContext.onlyMainRole = ev.target.checked;
                                            });
                                        }}
                                    />
                                    <Checkbox
                                        value={payload.searchContext.targetSearchEntitiesContext.onlyWithRiskFactors}
                                        label="Публикации только с риск-факторами"
                                        onChange={(ev) =>
                                            updatePayload((draft) => {
                                                draft.searchContext.targetSearchEntitiesContext.onlyWithRiskFactors =
                                                    ev.target.checked;
                                            })
                                        }
                                    />
                                    <Checkbox
                                        value={!payload.attributeFilters.excludeTechNews}
                                        label="Включать технические новости рынков"
                                        onChange={(ev) =>
                                            updatePayload((draft) => {
                                                draft.attributeFilters.excludeTechNews = !ev.target.checked;
                                            })
                                        }
                                    />
                                    <Checkbox
                                        value={!payload.attributeFilters.excludeAnnouncements}
                                        label="Включать анонсы и календари"
                                        onChange={(ev) =>
                                            updatePayload((draft) => {
                                                draft.attributeFilters.excludeAnnouncements = !ev.target.checked;
                                            })
                                        }
                                    />
                                    <Checkbox
                                        value={!payload.attributeFilters.excludeDigests}
                                        label="Включать сводки новостей"
                                        onChange={(ev) =>
                                            updatePayload((draft) => {
                                                draft.attributeFilters.excludeDigests = !ev.target.checked;
                                            })
                                        }
                                    />
                                </div>
                                <button
                                    className={css.search}
                                    disabled={isDisabled()}
                                    type="button"
                                    onClick={async () => {
                                        const response = await apiProvider.objectsearch.root(payload);
                                        console.log("response :>> ", response);
                                    }}
                                >
                                    Поиск
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
