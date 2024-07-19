import css from './documents.module.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { apiProvider } from '../../api-provider/api-provider';
import { ProfiDoc } from "../../components/documents/profi-doc";

const Documents = () => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const {state} = useLocation()

  useEffect(() => {
    const {payload} = state
    async function fetchDocuments() {
      try {
        setLoading(true)
        const objectsList = await apiProvider.objectsearch.root(payload)
        const docIds = objectsList.items.map(it=>it.encodedId).slice(0, 100)
        setDocuments(await apiProvider.documents.root(docIds) || [])

      } catch (err) {
        const error = err as Error
        setError(error.message || 'Error fetching documents')
      } finally {
        setLoading(false)
      }
    }
    fetchDocuments()
  }, []);

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && documents.length === 0 ? (
        <div>No documents found</div>
      ) : (
        <div className={css.cards}>
          {documents.map(doc => (
            <ProfiDoc doc={doc} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Documents;
