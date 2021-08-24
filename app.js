const express = require('express');
const path = require('path');
const app = express();
const data  = require('./utils/data');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Louder.'
    })
});

app.get('/mall-grab', (req,res) => {
    res.render('pages/mall-grab', {
      title: 'Mall Grab on Louder.'
        });
    });

app.get('/malaa', (req,res) => {
    res.render('pages/malaa', {
      title: 'Malaa on Louder.'
        });
    });

app.get('/tchami', (req,res) => {
    res.render('pages/tchami', {
      title: 'Tchami on Louder.'
        });
    });

    app.get('/dj-snake', (req,res) => {
    res.render('pages/dj-snake', {
      title: 'DJ Snake on Louder.'
        });
    });
    
    app.get('/folamour', (req,res) => {
    res.render('pages/folamour', {
      title: 'Folamour on Louder.'
        });
    });
    
    app.get('/peggy-gou', (req,res) => {
    res.render('pages/peggy-gou', {
      title: 'Peggy gou on Louder.'
        });
    });
    
    app.get('/or-la', (req,res) => {
    res.render('pages/or-la', {
      title: 'Or:la on Louder.'
        });
    });

    app.get('/mercer', (req,res) => {
    res.render('pages/mercer', {
      title: 'Mercer on Louder.'
        });
    });

    app.get('/metrik', (req,res) => {
    res.render('pages/metrik', {
      title: 'Metrik on Louder.'
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