const http = require('http');
const port = 5500;
const server = http.createServer((request, response) => {
    // Obtener info de una api, por medio de que lo hago?
    // url, method/verb (GET, POST, PUT, PATCH, DELETE)
    // Generar una response
    // status, response content, mymeType
    const status = 200;
    const mimeType = { 'Content-type': 'text/html' };
    const contentResponse = '<html> <body> Hola desde node chicos... </body> </html>';
    response.writeHead(status, mimeType);
    response.write(contentResponse);
    response.end();
});

server.listen(port);

console.log('servidor JOYA en el puerto:', port);