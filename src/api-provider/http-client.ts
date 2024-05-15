const baseUrl = "https://gateway.scan-interfax.ru";

export const httpClient = {
    get<T>(url: string): Promise<T> {
        return fetch(baseUrl + url).then((res) => res.json());
    },
    post<T>(url: string, data: any): Promise<T> {
        return fetch(baseUrl + url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(async (res) => {
                const data = await res.json();
                return {
                    data,
                    ok: res.ok,
                };
            })
            .then(({ data, ok }) => {
                if (!ok) throw new Error(data.message);
                return data;
            });
    },
};
