import React, { useEffect, useState } from 'react';
import { apiProvider } from "/Users/georgijsergeev/Desktop/скан/src/api-provider/api-provider.ts"
import { ScanDoc } from "/Users/georgijsergeev/Desktop/скан/src/components/documents/scan-doc.ts"



export const DocumentFetcher: React.FC = () => {
    const [documents, setDocuments] = useState<ScanDoc[]>([]);
    const documentIds = [
        "1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw=",
        "1:fmYoHEjQrRbQhz3RiUtm4oCh0JLRmtCLIyU10IzigqzRgGjQmCoR0JFg0YRhwrVzN9CxDUM50KcpdTbRiNCLwpjRkuKAphXRkVxh0JU50K5uWdC50L7RjX0C0KwQRsKp"
    ];

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                console.log("Fetching documents with IDs:", documentIds);
                const response = await apiProvider.documents.root(documentIds);
                console.log("Fetched documents:", response);
                setDocuments(response);
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };

        fetchDocuments();
    }, []);

    return (
        <div>
            <h1>Documents</h1>
            {documents.length === 0 ? (
                <p>No documents found.</p>
            ) : (
                <ul>
                    {documents.map((doc) => (
                        <li key={doc.ok.id}>{doc.ok.title.text}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
