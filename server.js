const express = require('express');
const path = require('path');
const app = express();
const apiRouter = require('./routes/index');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.use('/', apiRouter);

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}...`));