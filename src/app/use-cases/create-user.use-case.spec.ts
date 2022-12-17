import { InMemoryUserRepository } from '../../test/repositories/user.repository.in-memory';
import { User } from '../entities/user/user.entity';
import { CreateUserUseCase } from './create-user.use-case';

describe('Create User', () => {
    it('Should be create user and persist data', async () => {
        const userRepository = new InMemoryUserRepository();
        const createUserUseCase = new CreateUserUseCase(userRepository);

        await createUserUseCase.execute({
            name: 'Gustavo Duarte Alves',
            email: 'gualves2001@icliud.com',
            password: 'Mkjidnju8787@'
        });

        expect(userRepository.users).toHaveLength(1);
        expect(userRepository.users[0]).toBeInstanceOf(User);
    });
});
