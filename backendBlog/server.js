require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const routerPost = require('./routes/posts.route');
const routerUser = require('./routes/users.route');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser')

app.use(cors());
app.use(cookieParser())

app.use('/image', express.static(path.join(__dirname, '/image')));

//start the local server
app.use('/api/posts', routerPost);
app.use('/api/users', routerUser);

//connection with mongoose server
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch(() => {
    console.log('Failed to connect to MongoDB !');
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})