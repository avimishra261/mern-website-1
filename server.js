const express = require('express');
const router = require('./router/auth-router');
const app = express();
const PORT = 3000;

// Midware to give our server the power to work with json
app.use(express.json());

// Mount the Router: to use the router in your main Express app, you can 'mount' it at a specific URL prefix
app.use('/api/auth', router);

app.listen(PORT, () => {
    console.log(`The server is running on port: ${PORT}`)
});