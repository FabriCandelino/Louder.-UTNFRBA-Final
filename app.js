const express = require('express');
const path = require('path');
const app = express();
// const data = require('./utils/data.json');

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

  app.get('/sign-up', (req,res) => {
    res.render('pages/sign-up', {
      title: 'Sign Up'
    });
  });

  app.get('/log-in', (req,res) => {
    res.render('pages/log-in', {
      title: 'Log In'
    });
  });

app.listen(3000, () => {
    console.log('Running Port 3000');
});