import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { apiProvider } from '../../api-provider/api-provider';
import { WorkDoc } from "../../components/documents/work-doc";
import { ProfiDoc } from "../../components/documents/profi-doc";

const Documents = () => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const {state} = useLocation()

  useEffect(async () => {
    const {payload} = state
    const {data, error, isLoading} = await apiProvider.objectsearch.root(payload)
  }, []);

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
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
