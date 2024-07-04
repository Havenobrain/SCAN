const fetchHistograms = async () => {
    const payload = {
        issueDateInterval: {
            startDate: "2023-01-01T00:00:00Z",
            endDate: "2023-12-31T23:59:59Z"
        },
        searchContext: {
            term: "информация"
        },
        intervalType: "Year", 
        histogramTypes: ["TotalDocuments"] 
    };

    const response = await fetch('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIwYzI5NDI0NC1jYzgyLWVkMTEtODI3NS04NzJjODBhZjI3NTMiLCJuYmYiOjE3MTkzMjExNDUsImV4cCI6MTcxOTQwNzU0NSwiaXNzIjoiU2NhbkdhdGV3YXkiLCJhdWQiOiJzZl9zdHVkZW50MSJ9.T2Yh8s6O5b07Tbj8MbQ5dG5t5EZx6vmx8q9NHkuLwKA',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    const result = await response.json();
    console.log(result);
};

fetchHistograms();
