import { apiProvider } from "../../api-provider/api-provider";
import css from "./plate.module.css";
import spinner from "../../assets/img/spinner.png";
import { useFetch } from "./useFetch";

export type UseFetchOptions<T> = {
    queryFn: () => Promise<T>;
};

export function Plate() {
    const { data, error, isLoading } = useFetch({ queryFn: apiProvider.account.info });

    const renderBody = () => {
        if (isLoading) return <img src={spinner} className={css.spinner} />;
        if (error) return <p>Error</p>;

        return (
            <>
                <p>Использовано компаний </p>
                <p className={css.bold}> {data?.eventFiltersInfo.usedCompanyCount}</p>
                <p>Лимит по компаниям</p>
                <p className={css.green}>{data?.eventFiltersInfo.companyLimit}</p>
            </>
        );
    };

    return <div className={css.card}>{renderBody()}</div>;
}
