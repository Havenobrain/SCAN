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
                    inn: 0,
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
            and: [{ type: "company" }],
            or: [{ type: "company" }],
            not: [{ type: "company" }]
        },
        locationsFilter: {
            and: [{ countryCode: "string", regionCode: 0 }],
            or: [{ countryCode: "string", regionCode: 0 }],
            not: [{ countryCode: "string", regionCode: 0 }]
        },
        themesFilter: {
            and: [{ entityId: 0, tonality: "any" }],
            or: [{ entityId: 0, tonality: "any" }],
            not: [{ entityId: 0, tonality: "any" }]
        }
    },
    searchArea: {
        includedSources: [0],
        excludedSources: [0],
        includedSourceGroups: [0],
        excludedSourceGroups: [0],
        includedDistributionMethods: [0],
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
