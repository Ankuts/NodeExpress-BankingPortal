/* Needed Build-In Libraries
 */
const fs = require('fs').promises;
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './src/public/')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Index'});
});
  
app.listen(PORT, () => {
    debug(`PS Project Running on port 3000!`);
});