import { httpClient } from "./http-client";

export const apiProvider = {
    login: (login: string, password: string) => {
        return httpClient.post<{ accessToken: string; expire: string }>("/api/v1/account/login", { login, password });
    },
    account: {
        info: () =>
            httpClient.get<{ eventFiltersInfo: { usedCompanyCount: number; companyLimit: number } }>("/api/v1/account/info"),
    },
};
