export interface ScanDoc {
    ok: Ok;
}

export interface Ok {
    schemaVersion: string;
    id: string;
    version: number;
    issueDate: string;
    url: string;
    source: Source;
    dedupClusterId: string;
    title: Title;
    content: Content;
    entities: Entities;
    attributes: Attributes;
    language: string;
}

export interface Source {
    id: number;
    groupId: number;
    name: string;
    categoryId: number;
    levelId: number;
    distributionMethodId: number;
}

export interface Title {
    text: string;
    markup: string;
}

export interface Content {
    markup: string;
}

export interface Entities {
    companies: Company[];
    people: any[];
    themes: Theme[];
    locations: Location[];
}

export interface Company {
    suggestedCompanies: SuggestedCompany[];
    resolveInfo: ResolveInfo;
    tags: string[];
    isSpeechAuthor: boolean;
    localId: number;
    name: string;
    entityId: number;
    isMainRole: boolean;
}

export interface SuggestedCompany {
    sparkId: number;
    inn: string;
    ogrn: string;
    searchPrecision: string;
}

export interface ResolveInfo {
    resolveApproaches: string[];
}

export interface Theme {
    localId: number;
    name: string;
    entityId: number;
    tonality: string;
    participant?: Participant;
}

export interface Participant {
    localId: number;
    type: string;
}

export interface Location {
    code: Code;
    localId: number;
    name: string;
    isMainRole: boolean;
}

export interface Code {
    countryCode: string;
    regionCode: string;
}

export interface Attributes {
    isTechNews: boolean;
    isAnnouncement: boolean;
    isDigest: boolean;
    isSpeechRecognition: boolean;
    influence: number;
    wordCount: number;
    coverage: Coverage;
}

export interface Coverage {
    value: number;
    state: string;
}
