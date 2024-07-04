export interface HistogramsResponse {
    data: Datum[];
}

export interface Datum {
    data: Datum2[];
    histogramType: string;
}

export interface Datum2 {
    date: string;
    value: number;
    id: string; 
}
