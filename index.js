const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    var a = 2;
    var b = 1;
    res.send("hello")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})