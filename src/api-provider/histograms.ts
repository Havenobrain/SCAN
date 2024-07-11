export interface HistogramsPayload {
    intervalType: string;
    histogramTypes: string[];
    issueDateInterval: IssueDateInterval;
    searchContext: SearchContext;
    searchArea: SearchArea;
    attributeFilters: AttributeFilters;
    similarMode: string;
    limit: number;  
    sortType: string;  
    sortDirectionType: string;  
}

export interface IssueDateInterval {
    startDate: string;
    endDate: string;
}

export interface SearchContext {
    targetSearchEntitiesContext: TargetSearchEntitiesContext;
    searchEntitiesFilter: EntitiesFilter;
    locationsFilter: LocationsFilter;
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

export interface EntitiesFilter {
    and: Entity[];
    or: Entity[];
    not: Entity[];
}

export interface LocationsFilter {
    and: Location[];
    or: Location[];
    not: Location[];
}

export interface ThemesFilter {
    and: Theme[];
    or: Theme[];
    not: Theme[];
}

export interface TargetSearchEntity {
    type: string;
    sparkId?: any;  
    entityId?: any; 
    inn?: number;  
    maxFullness?: boolean; 
    inBusinessNews?: any;  
}

export interface RiskFactors {
    and: RiskFactor[];
    or: RiskFactor[];
    not: RiskFactor[];
}

export interface Themes {
    and: Theme[];
    or: Theme[];
    not: Theme[];
}

export interface SearchArea {
    includedSources: number[];
    excludedSources: number[];
    includedSourceGroups: number[];
    excludedSourceGroups: number[];
    includedDistributionMethods: number[];
    excludedDistributionMethods: number[];
}

export interface AttributeFilters {
    excludeTechNews: boolean;
    excludeAnnouncements: boolean;
    excludeDigests: boolean;
}

export interface Entity {
    type: string;
}

export interface Location {
    countryCode: string;
    regionCode: number;
}

export interface Theme {
    tonality: string;
    entityId: number;
}

export interface RiskFactor {
    id: number;
}
