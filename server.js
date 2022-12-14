const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/'))

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/index.html' })
});

app.listen(process.env.PORT | 3000, () => {
    console.log('app is running on the port 3000');
})