const express = require('express');
const path = require('path');

const app = express();
let port = process.env.PORT
app.use(express.static('./dist/'))

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/index.html' })
});

app.listen(port | 3000, () => {
    console.log('app is running on the port 3000');
})