const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Louder.'
    })
});

app.get('/artistname', (req,res) => {
    res.render('pages/artist', {
      title: 'ArtistName on Louder.'
    });
  });

app.listen(3000, () => {
    console.log('Running Port 3000');
});