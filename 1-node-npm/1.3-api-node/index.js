const http = require('http');

const server = http.createServer((request, response) => {
    // Obtener info de una api, por medio de que lo hago?
    // url, method/verb (GET, POST, PUT, PATCH, DELETE)
    // Generar una response
    // status, response content, mymeType
    const status = 500;
    const mimeType = { 'Content-type': 'text/html' };
    const contentResponse = '<html> <body> Hola desde node chicos... </body> </html>';
    response.writeHead(status, mimeType);
    response.write(contentResponse);
    response.end();
});

server.listen(5500);

console.log('servidor JOYA en el puerto:', 5500);