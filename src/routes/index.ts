import { Router } from 'express';

import ModelRoute from './model.route';
import UserRoute from './user.route';
import EventRoute from './event.route';

const routes = Router();

routes.use('/user', UserRoute);
routes.use('/model', ModelRoute);
routes.use('/events', EventRoute);

export default routes;