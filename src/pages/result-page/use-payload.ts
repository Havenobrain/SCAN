import { HistogramsPayload } from "../../api-provider/histograms";

export const initialData: HistogramsPayload = {
    intervalType: "day",
    histogramTypes: ["totalDocuments"],
    issueDateInterval: {
        startDate: "2023-01-01T00:00:00Z", 
        endDate: "2023-12-31T23:59:59Z"   
    },
    searchContext: {
        targetSearchEntitiesContext: {
            targetSearchEntities: [
                {
                    type: "company",
                    sparkId: null,
                    entityId: null,
                    inn: 7710137066,
                    maxFullness: true,
                    inBusinessNews: null,
                }
            ],
            onlyMainRole: true,
            tonality: "any",
            onlyWithRiskFactors: false,
            riskFactors: {
                and: [],
                or: [],
                not: []
            },
            themes: {
                and: [],
                or: [],
                not: []
            }
        },
        searchEntitiesFilter: {
            and: [],
            or: [],
            not: []
        },
        locationsFilter: {
            and: [],
            or: [],
            not: []
        },
        themesFilter: {
            and: [],
            or: [],
            not: []
        }
    },
    searchArea: {
        includedSources: [],
        excludedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: [],
        includedDistributionMethods: [],
        excludedDistributionMethods: []
    },
    attributeFilters: {
        excludeTechNews: true,
        excludeAnnouncements: true,
        excludeDigests: true
    },
    similarMode: "none",
    limit: 1000,
    sortType: "sourceInfluence",
    sortDirectionType: "desc"
};
