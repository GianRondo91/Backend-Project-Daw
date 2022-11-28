var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3001;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.status(200).send({
		message: 'Servidor levantado'
	});
});

//Prueba de conexion con el front
app.get('/api', function(req, res){
	res.status(200).send({
		message: 'Hola desde el ENDPOINT API'
	});
});

app.listen(port, function(){
	console.log(`Server running in http://localhost/api:${port}`);
	console.log('Defined routes:');
	console.log('	[GET] http://localhost:3525/');
});