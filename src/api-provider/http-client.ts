import { localStorageService } from "../services/local-storage-service/local-storage-service";

const baseUrl = "https://gateway.scan-interfax.ru";

export const httpClient = {
    async get<T>(url: string): Promise<T> {
        const token = localStorageService.auth.get()?.accessToken ?? "";
        const Authorization = `Bearer ${token}`;
        const fullUrl = baseUrl + url;

        console.log("GET request to:", fullUrl); // Лог URL-адреса запроса

        return fetch(fullUrl, {
            method: "GET",
            headers: {
                Authorization,
            },
        })
            .then(async (res) => {
                const text = await res.text();
                console.log("Response status:", res.status); // Лог статуса ответа
                console.log("Response text:", text); // Лог текста ответа
                if (res.ok) {
                    return JSON.parse(text) as T;
                } else {
                    throw new Error(text);
                }
            });
    },
    async post<T>(url: string, data: any): Promise<T> {
        const token = localStorageService.auth.get()?.accessToken ?? "";
        const Authorization = `Bearer ${token}`;
        const fullUrl = baseUrl + url;

        console.log("POST request to:", fullUrl); // Лог URL-адреса запроса

        return fetch(fullUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Authorization,
            },
        })
            .then(async (res) => {
                const text = await res.text();
                console.log("Response status:", res.status); // Лог статуса ответа
                console.log("Response text:", text); // Лог текста ответа
                if (res.ok) {
                    return JSON.parse(text) as T;
                } else {
                    throw new Error(text);
                }
            });
    },
};
