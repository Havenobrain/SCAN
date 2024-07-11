export interface HistogramsResponse {
    data: HistogramData[];
}

export interface HistogramData {
    data: HistogramEntry[];
    histogramType: string;
}

export interface HistogramEntry {
    date: string;
    value: number;
}
