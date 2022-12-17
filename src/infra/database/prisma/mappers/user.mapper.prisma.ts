import { User as RawUser } from '@prisma/client';
import { User } from '../../../../app/entities/user/user.entity';

export class PrismaUserMapper {
    static toPrisma(user: User) {

        return {
            id: user.id,
            name: user.name,
            password: user.password.value,
            email: user.email.value,
            createdAt: user.createdAt,
            birthDate: user.birthDate,
        };
    }

    static toDomain(raw: RawUser): User {
        return new User(
            {
                id: raw.id,
                name: raw.name,
                password: raw.password,
                email: raw.email,
                createdAt: raw.createdAt,
                birthDate: raw.birthDate,
            },
        );
    }
}
