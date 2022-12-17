import { User } from '../../app/entities/user/user.entity';
import { UserRepository } from '../../app/repositories/user.repository';

export class InMemoryUserRepository implements UserRepository {
    public users: User[] = [];

    async create(user: User) {
        this.users.push(user);
    }
}
