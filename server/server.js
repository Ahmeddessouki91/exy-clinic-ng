const express = require('express');
const { SetGlobalMiddlewares } = require('./middlewares')
const restRouter = require('./api/restRouter');
const { authenticate, signIn } = require('./api/middlewares/authentication');

const app = express();

SetGlobalMiddlewares(app);

app.use('/signin',signIn);
app.use('/api', authenticate, restRouter)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

module.exports = app;