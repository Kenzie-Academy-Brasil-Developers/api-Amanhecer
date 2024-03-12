import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swagger from 'swagger-ui-express'; 

const swaggerDocument = require("../swagger.json")


const swaggerRouter = express.Router();

swaggerRouter.use('/', swaggerUi.serve);
swaggerRouter.get('/', swaggerUi.setup(swaggerDocument));

export default swaggerRouter;
