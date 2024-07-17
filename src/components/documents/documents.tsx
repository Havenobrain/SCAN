import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Documents = () => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const {state} = useLocation()

  useEffect(() => {
    const {searchResults, error} = state
    if (error) {
      setError('Error data fetching: ' + error.message)
    } else {
      setDocuments(searchResults.data)
    }
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
