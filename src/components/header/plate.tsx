import React, { useEffect, useState } from 'react';
import { apiProvider } from "../../api-provider/api-provider";
import css from "./plate.module.css";
import spinner from "../../assets/img/spinner.png";

export function Plate() {
    const [data, setData] = useState<{ eventFiltersInfo: { usedCompanyCount: number; companyLimit: number } } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await apiProvider.account.info();
                setData(result);
                setIsLoading(false);
            } catch (err) {
                setError("Error fetching account info");
                setIsLoading(false);
                console.error("Error fetching account info:", err);
            }
        };

        fetchData();
    }, []);

    const renderBody = () => {
        if (isLoading) return <img src={spinner} className={css.spinner} />;
        if (error) return <p>{error}</p>;

        if (data) {
            console.log("Fetched account info:", data);
            return (
                <>
                    <p>Использовано компаний</p>
                    <p className={css.bold}>{data.eventFiltersInfo.usedCompanyCount}</p>
                    <p>Лимит по компаниям</p>
                    <p className={css.green}>{data.eventFiltersInfo.companyLimit}</p>
                </>
            );
        }

        return null;
    };

    return (
        <div className={css.card}>{renderBody()}</div>
    );
}
