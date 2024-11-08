const express = require('express');
const app     = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!'});
})
  
app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})

module.exports = app;