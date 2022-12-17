import { User } from '../entities/user/user.entity';
import { UserRepository } from '../repositories/user.repository';

export interface UserRequest {
    name: string;
    email: string;
    password: string;
    birthDate?: Date;
}

interface UserResponse {
    user: User;
}

export class CreateUserUseCase {
    public o = 'odasdas';
    constructor(private userRepository: UserRepository) {}


    async execute(request: UserRequest): Promise<UserResponse> {
        console.log('entrei');
        const { name, email, password } = request;

        const user = new User({
            name, email, password, birthDate: new Date()
        });

        await this.userRepository.create(user);

        return {
            user
        };
    }
}
