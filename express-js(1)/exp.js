const express = require('express');
const app = express();
const port = 3000;

app.get('/exp', (req, res) => {
    const request = req.headers['user-agent'];
    console.log(request);
    res.send('hello world');
})

app.listen(port, () => {
    console.log(`app listen on port ${port}`);
});