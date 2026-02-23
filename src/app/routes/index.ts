import express from 'express';
import { UserRouters } from '../modules/user/user.routes';
import { AuthRouters } from '../modules/auth/auth.routes';
import { adminRoutes } from '../modules/admin/admin.routes';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRouters,
  },
  {
    path: '/admin',
    route: adminRoutes,
  },
  {
    path: '/users',
    route: UserRouters,
  },
  // {
  //   path: '/notifications',
  //   route: NotificationRoutes,
  // },
 
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
