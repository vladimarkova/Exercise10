const express = require('express');
const path = require('path');
const app = express();
// const apiRouter = require('./api');
const data = {
    users: require('./data/users.json'),
    setUsers: function(newUsers) {
        this.users = newUsers;
    }
};

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(path.resolve(__dirname, 'public', 'index.html'));
})

// app.get('/register', (req, res) => {
//     res.send(path.resolve(__dirname, 'public', 'register.html'));
// })

app.get('/user', (req, res) => {
    const sanitizedUsers = data.users.map((user) => {
    return {
        username: user.username
    }})
    res.json(sanitizedUsers);
})

app.post('/user', (req, res) => {
    const { username, psw } = req.body;
    if (!username || !psw) {
        return res.status(404).json({ message: 'Username and password are required!'});
    }
    const userExists = data.users.find(user => user.username === username);
    if (userExists) {
        return res.status(409).json({ message: `User with username ${username} already exists!` });
    }
    const newUser = { username, psw };
    data.setUsers([...data.users, newUser]);
    // console.log(data.users);

    res.status(201).json({ message: `User ${username} created.`});
})

// app.use('/api', auth, apiRouter);

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}...`));