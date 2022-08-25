import { Router } from 'express';

import ModelRoute from './model.route';
import UserRoute from './user.route';
// import AuthtRoute from './event.route';
// import EventRoute from './auth.route';

const routes = Router();

routes.use('/model', ModelRoute);
routes.use('/user', UserRoute);

export default routes;