const http = require('http'),
    PORT = 2333,
    serverHandle = require('../app')

const server = http.createServer(serverHandle)
server.listen(PORT)