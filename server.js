const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Load routes
const itemRoutes = require('./routes/api/items');

const db = require('./config/keys'); // Database keys

// Body parser middleware
app.use(bodyParser.json());

// Use routes
app.use('/api/items', itemRoutes);

// Serve static assets if int production
if (process.env.NODE_ENV == 'production') {
   // Set static folder
   app.use(express.static('client/build'));

   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
}

// DB Config
mongoose.connect(
   db.mongoURI,
   { useNewUrlParser: true }
)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const port = process.env.PORT || 5000; // Port
app.listen(port, () => {
   console.log(`Server started at ${port}`);
})