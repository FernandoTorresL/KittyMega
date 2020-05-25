const express = require('express');
const path = require('path');
const loadCsvFilesRouter = require('./routes/views/csv_files');

const app = express();

//statics files
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes
app.use('/', loadCsvFilesRouter);

// server
const server = app.listen(8000, function () {
  console.log(`Listening http://localhost:${server.address().port}`);
});
