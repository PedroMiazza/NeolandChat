let WebSocketServer = require('ws').Server
let server = new WebSocketServer({ port: 3000 })

server.on('connection', (ws) => {
    ws.send('Bienvenido al socket...')
    ws.on('message', (message) => {
        console.log(`Mensaje Recibido: ${message}`)
        if (message === 'exit') {
            ws.close()
        } else {
            server.clients.forEach(client => {
                client.send(message)
            })
        }
    })
})