import { HistogramsPayload } from "./histograms";
import { HistogramsResponse, ObjectSearchResponse } from "./histograms-payload";
import { httpClient } from "./http-client";
import { ScanDoc } from "../components/documents/scan-doc";

interface LoginResponse {
    accessToken: string;
    refreshToken?: string;
    expire: string;
}

export const apiProvider = {
    login: async (login: string, password: string): Promise<LoginResponse> => {
        try {
            console.log("Sending login request with:", { login, password });
            const response = await httpClient.post<LoginResponse>("/api/v1/account/login", { login, password });
            console.log("Login response from server:", response);
            return response;
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    },

    account: {
        info: async () => {
            return httpClient.get<{ eventFiltersInfo: { usedCompanyCount: number; companyLimit: number } }>("/api/v1/account/info");
        },
    },
    objectsearch: {
        root: async (data: HistogramsPayload) => {
            console.log("Sending root request with payload:", data); 
            try {
                const response = await httpClient.post<ObjectSearchResponse>("/api/v1/objectsearch", data);
                return response;
            } catch (error) {
                console.error("Object search root error:", error);
                throw error;
            }
        },
        histograms: async (data: HistogramsPayload) => {
            console.log("Sending histograms request with payload:", data);
            try {
                const response = await httpClient.post<HistogramsResponse>("/api/v1/objectsearch/histograms", data);
                return response;
            } catch (error) {
                console.error("Object search histograms error:", error);
                throw error;
            }
        },
    },
    documents: {
        root: async (ids: string[]) => {
            console.log("Sending documents request with ids:", ids); 
            try {
                const response = await httpClient.post<ScanDoc[]>("/api/v1/documents", { ids });
                return response;
            } catch (error) {
                console.error("Documents request error:", error);
                throw error;
            }
        },
    },
};
