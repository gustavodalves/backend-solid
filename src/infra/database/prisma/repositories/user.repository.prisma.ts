import { User, UserProps } from '../../../../app/entities/user/user.entity';
import { UserRepository } from '../../../../app/repositories/user.repository';
import { Replace } from '../../../../helpers/Replace';
import { PrismaUserMapper } from '../mappers/user.mapper.prisma';
import { prisma } from '../prisma.service';

export class PrismaUserRepository implements UserRepository {
    private prisma = prisma;

    async create(user: User): Promise<
    Replace<UserProps, { createdAt?: Date, id?: string, password: string, email: string }>
    > {
        const raw = PrismaUserMapper.toPrisma(user);
        await this.prisma.user.create({
            data: raw
        });

        return raw;
    }
}
