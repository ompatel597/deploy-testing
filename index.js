require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

//get methods
app.get('/', (req, res) =>{
    res.send('Hello Jonathan')
} )

app.get( '/twitter',(req, res) => {
    res.send('jonathandotcom')
} )
app.get( '/login',(req, res) => {
    res.send('Login please')
} )

//listen methods
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
} )