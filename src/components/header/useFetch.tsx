import { useState, useEffect } from "react";

type UseFetchOptions<T> = {
    queryFn: () => Promise<T>;
};

export function useFetch<T>({ queryFn }: UseFetchOptions<T>) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching data...");
                const result = await queryFn();
                console.log("Data fetched successfully:", result);
                setData(result);
                setIsLoading(false);
            } catch (err) {
                setError("Error fetching data");
                setIsLoading(false);
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, [queryFn]);

    return { data, error, isLoading };
}
