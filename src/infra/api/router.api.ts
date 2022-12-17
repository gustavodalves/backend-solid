import { UserRepository } from '../../app/repositories/user.repository';
import { CreateUserUseCase, UserRequest } from '../../app/use-cases/create-user.use-case';
import { HttpServer } from './http-server.api';

export class Router {
    constructor(
        private readonly httpServer: HttpServer,
        private readonly userRepository: UserRepository) {}

    init() {
        this.httpServer.on('post', '/register', async (params: Object, body: UserRequest) => {
            const { name, email, password } = body;

            const createUserUseCase = new CreateUserUseCase(this.userRepository);

            const user = await createUserUseCase.execute({
                name,
                email,
                password
            });

            return user;
        });
    }
}
