import { User } from '../../../../app/entities/user/user.entity';
import { UserRepository } from '../../../../app/repositories/user.repository';
import { PrismaUserMapper } from '../mappers/user.mapper.prisma';
import { prisma } from '../prisma.service';

export class PrismaUserRepository implements UserRepository {
    private prisma = prisma;

    async create(user: User): Promise<void> {
        console.log(3);
        const raw = PrismaUserMapper.toPrisma(user);
        await this.prisma.user.create({
            data: raw
        });
    }
}
