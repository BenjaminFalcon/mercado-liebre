const express = require ('express')
const path = require ('path')

const app = express()

const publicPath = path.resolve (__dirname, './public') ;

app.listen(3000, () => { 
    console.log ("servidor corriendo en el purto 3000")
})

app.use (express.static(path.resolve(__dirname, './public')))



app.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, './Views/home.html'));
  });
  