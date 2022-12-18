import { User } from '../entities/user/user.entity';
import { UserRepository } from '../repositories/user.repository';

export interface UserRequest {
    name: string;
    email: string;
    password: string;
    birthDate?: Date;
}

export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}


    async execute(request: UserRequest): Promise<any> {
        const { name, email, password } = request;

        const user = new User({
            name, email, password, birthDate: new Date()
        });

        const newUser = await this.userRepository.create(user);

        return {
            ...newUser,
            password: undefined,
        };
    }
}
