import { ExpressAdapter } from './infra/api/express-adapter.api';
import { Router } from './infra/api/router.api';
import { PrismaUserRepository } from './infra/database/prisma/repositories/user.repository.prisma';

const httpServer = new ExpressAdapter();
const userRepository = new PrismaUserRepository();

const router = new Router(httpServer, userRepository);

router.init();
httpServer.listen(3000);
