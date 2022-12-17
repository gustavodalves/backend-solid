import { User } from "../entities/user/user.entity";

export interface UserRepository {
    create(user: User): Promise<void>;
}
