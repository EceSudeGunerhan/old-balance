var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); 

// MongoDB bağlantısı
require('./api/models/db');
require('./api/models/venue');
require('./bin/www');

var indexRouter = require('./routes/index');
var apiRouter = require('./api/routes/index');

var app = express();

app.use(cors()); 

// Middleware kullanımı
app.use('/api', apiRouter)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Route tanımlamaları
app.use('/', indexRouter);


// Hata yakalama middleware'i
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Bir şeyler ters gitti!' });
});

// 404 Middleware
app.use((req, res, next) => {
  res.status(404).send({ message: 'Kaynak bulunamadı!' });
});

// Sunucu dinleme
var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});

module.exports = app;
