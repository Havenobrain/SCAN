export interface HistogramsResponse {
    data: Daum[];
}

export interface Daum {
    data: Daum2[];
    histogramType: string;
}

export interface Daum2 {
    date: string;
    value: number;
}
