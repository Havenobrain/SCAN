import { useEffect, useState } from "react";
import { UseFetchOptions } from "./plate";

export const useFetch = <T,>(options: UseFetchOptions<T>) => {
    const [data, setData] = useState<T | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            try {
                const response = await options.queryFn();
                setData(response);
            } catch (error) {
                setError((error as Error).message);
            }
            setIsLoading(false);
        })();
    }, []);

    return { data, isLoading, error };
};
