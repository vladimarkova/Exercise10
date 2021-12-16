const express = require('express');
const path = require('path');
const app = express();
// const apiRouter = require('./api');

const PORT = process.env.PORT || 3000;

const users = [
    {
        username: 'Vladi Markova',
        psw: 'bdejhduie'
    },
    {
        username: 'Jon Arbuckle',
        psw: 'niswaji'
    }
];

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(path.resolve(__dirname, 'public', 'index.html'));
})

// app.get('/register', (req, res) => {
//     res.send(path.resolve(__dirname, 'public', 'register.html'));
// })

app.get('/user', (req, res) => {
    const sanitizedUsers = users.map((user) => {
    return {
        username: user.username
    }})
    res.json(sanitizedUsers);
})

// app.use('/api', auth, apiRouter);

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}...`));