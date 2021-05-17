import AwsController from './controllers/awsController'
import express from 'express';

const routes = express.Router()

routes.get('/', (request, response) => response.json({ status: "Server running on port 3333" }))
routes.get('/instances', AwsController.index)

export default routes;
