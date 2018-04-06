const express = require('express');
const { SetGlobalMiddlewares } = require('./middlewares')
const restRouter = require('./api/restRouter');

const app = express();

SetGlobalMiddlewares(app);

app.use('/api',restRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

module.exports = app;