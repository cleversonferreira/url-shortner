const express    = require('express');
const mongoose   = require('mongoose');
const morgan     = require('morgan');
const app        = express();

require('dotenv').config()

mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

app.use(require('./routes'));

app.listen(process.env.PORT, () => {
    console.log('Server live on :' + process.env.PORT);
});