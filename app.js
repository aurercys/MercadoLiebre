const express = require ('express');
const app = express ();
const path = require('path');

// app.listen (3000, () =>{
//      console.log('Servidor Funcionando');
// });

app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor Funcionando');

});

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.get ('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'home.html'));
});

app.get ('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'login.html'));
});

app.get ('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'register.html'));
});

