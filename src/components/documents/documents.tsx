import React, { useEffect, useState } from 'react';
import { httpClient } from '../../api-provider/http-client';
import { HistogramsPayload } from '../../api-provider/histograms';


interface HistogramsResponse {
  data: any[];
}

const Documents = () => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const payload: HistogramsPayload = {
          intervalType: 'day',
          histogramTypes: ['totalDocuments'],
          issueDateInterval: {
            startDate: '2024-01-01T00:00:00Z',
            endDate: '2024-12-31T23:59:59Z',
          },
          searchContext: {
            targetSearchEntitiesContext: {
              targetSearchEntities: [
                {
                  type: 'company',
                  sparkId: null,
                  entityId: null,
                  inn: 0,
                  maxFullness: true,
                  inBusinessNews: null
                },
              ],
              onlyMainRole: false,
              tonality: 'any',
              onlyWithRiskFactors: false,
              riskFactors: {
                and: [],
                or: [],
                not: [],
              },
              themes: {
                and: [],
                or: [],
                not: [],
              },
            },
            searchEntitiesFilter: {
              and: [],
              or: [],
              not: [],
            },
            locationsFilter: {
              and: [],
              or: [],
              not: [],
            },
            themesFilter: {
              and: [],
              or: [],
              not: [],
            },
          },
          searchArea: {
            includedSources: [],
            excludedSources: [],
            includedSourceGroups: [],
            excludedSourceGroups: [],
            includedDistributionMethods: [],
            excludedDistributionMethods: [],
          },
          attributeFilters: {
            excludeTechNews: false,
            excludeAnnouncements: false,
            excludeDigests: false,
          },
          similarMode: 'none',
          limit: 1000,
          sortType: 'sourceInfluence',
          sortDirectionType: 'desc'
        };

        const response = await httpClient.post<HistogramsResponse>('/api/v1/objectsearch/histograms', payload);
        setDocuments(response.data);
      } catch (err) {
        setError('Error fetching documents');
        console.error('Error fetching documents:', err);
      }
    };

    fetchDocuments();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {documents.length === 0 ? (
        <div>No documents found</div>
      ) : (
        <ul>
          {documents.map((doc, index) => (
            <li key={index}>{doc.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Documents;
