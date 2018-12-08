var express = require('express')

var app = express()

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
})

app.get('/', function(req, res){
    const result = {
        products: [{
            title: "Playstation 4",
            price: 250,
            color: "Negro"
        }, {
            title: "Monitor",
            price: 50,
            color: "Blanco"
        }, {
            title: "Bocina",
            price: 20,
            color: "Gris",
            connection: "Bluetooth"
        }, {
            title: "Laptop",
            price: 1200,
            color: "Gris"
        }]
    }
    res.send(JSON.stringify(result))
})

app.get('/hello-world', function(req, res){
    res.send('Hello Wolrd')
})

app.listen(3000, function() {
    console.log("Nuestro servidor esta corriendo en el puerto 3000. Utilizar la url http://localhost:3000")
})