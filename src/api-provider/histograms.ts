export interface HistogramsPayload {
    issueDateInterval: IssueDateInterval;
    searchContext: SearchContext;
    searchArea: SearchArea;
    attributeFilters: AttributeFilters;
    similarMode: string;
    limit: number;
    sortType: string;
    sortDirectionType: string;
    intervalType: string;
    histogramTypes: string[];
}

export interface IssueDateInterval {
    startDate: string;
    endDate: string;
}

export interface SearchContext {
    targetSearchEntitiesContext: TargetSearchEntitiesContext;
    themesFilter: ThemesFilter;
}

export interface TargetSearchEntitiesContext {
    targetSearchEntities: TargetSearchEntity[];
    onlyMainRole: boolean;
    tonality: string;
    onlyWithRiskFactors: boolean;
    riskFactors: RiskFactors;
    themes: Themes;
}

export interface TargetSearchEntity {
    type: string;
    sparkId: any;
    entityId: any;
    inn: number;
    maxFullness: boolean;
    inBusinessNews: any;
}

export interface RiskFactors {
    and: any[];
    or: any[];
    not: any[];
}

export interface Themes {
    and: any[];
    or: any[];
    not: any[];
}

export interface ThemesFilter {
    and: any[];
    or: any[];
    not: any[];
}

export interface SearchArea {
    includedSources: any[];
    excludedSources: any[];
    includedSourceGroups: any[];
    excludedSourceGroups: any[];
}

export interface AttributeFilters {
    excludeTechNews: boolean;
    excludeAnnouncements: boolean;
    excludeDigests: boolean;
}
