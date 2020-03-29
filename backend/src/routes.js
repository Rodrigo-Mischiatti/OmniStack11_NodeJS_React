/*
* Tipos de parametros
* Query params: ex: localhost:3333/users?nome=Rodrigo&idade=40  request.query
* Route Params: ex: localhost:3333/users/1   (capturo assim: localhost:3333/users/:id)    request.params
* request body: corpo da requisição 
*/

const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();   /* desacoplando o modulo de rotas do express em uma nova variavel */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
