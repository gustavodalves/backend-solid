import { Replace } from '../../helpers/Replace';
import { User, UserProps } from '../entities/user/user.entity';

export interface UserRepository {
    create(user: User): Promise<
    Replace<UserProps, { createdAt?: Date, id?: string, password: string, email: string }>
    >;
}
