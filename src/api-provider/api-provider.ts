import { HistogramsPayload } from "./histograms";
import { HistogramsResponse } from "./histograms-payload";
import { httpClient } from "./http-client";

export const apiProvider = {
    login: (login: string, password: string) => {
        return httpClient.post<{ accessToken: string; expire: string }>("/api/v1/account/login", { login, password });
    },
    account: {
        info: async () => {
            return httpClient.get<{ eventFiltersInfo: { usedCompanyCount: number; companyLimit: number } }>(
                "/api/v1/account/info"
            );
        },
    },
    objectsearch: {
        root: async (data: HistogramsPayload) => {
            return httpClient.post<HistogramsResponse>("/api/v1/objectsearch", data);
        },
        histograms: async (data: HistogramsPayload) => {
            return httpClient.post<HistogramsResponse>("/api/v1/objectsearch/histograms", data);
        },
    },
    documents: {
        root: async (ids: string[]) => {
            return httpClient.post("/api/v1/documents", { ids });
        },
    },
};

// /api/v1/documents/start/home
// /api/v1/documents/start/test

// const _apiProvider = {
//     documents: {
//         start: {
//             home: () => {},
//             test: () => {},
//         },
//     },
// };

// _apiProvider.documents.start.home();
// _apiProvider.documents.start.test();
