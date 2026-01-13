const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./src/routes/userRoute');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://Zanzibar:Janka%4007@cluster11.xzqujjx.mongodb.net/?appName=Cluster11';


app.use(express.json());

mongoose.connect(mongoURI)
    .then(() => {
    console.log('Connected to MongoDB')
    })
    .catch((err) =>{
        console.error('Error connecting to MongoDB', err);
    } );


app.use('/api/users', userRoute);
app.use('/', (req, res) =>{
    res.send('API is running....')
});

app.listen(port, () =>{
    console.log('Server is running on port', port);
})