// app.js
const express = require('express');
const exphbs = require('express-handlebars');

const connectToMongoDB = require('./server/config/database');
const userRoutes = require('./server/routes/userRoutes');
const path = require('path');
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to MongoDB
connectToMongoDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set the static file directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

// // Express configuration
// app.engine('.html', exphbs({ extname: '.html' }));
// app.set('view engine', '.html');

// // Set Handlebars as the default view engine
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');


//app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/user', userRoutes);

// Define route handler for root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});





// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});



// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});