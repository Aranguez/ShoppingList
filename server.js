const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const items = require('./routes/api/Items');

const app = express();

//middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI
// Connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
            .then(() => console.log('MongoDB connected'))
            .catch(err => console.log(err))

app.use('/api/items', items) //todo lo que venga de esta url va a estar referida a la variable items

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}` );
});


