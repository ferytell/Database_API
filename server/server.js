const express = require('express');
const apiRouter = require('./routes');
const app = express();


app.use(express.json());

app.use('/api/articles', apiRouter);

app.listen(process.env.PORT || '3000', () => {

    console.log(`server is ngesot onm port: ${process.env.PORT || '3000'}`);
});