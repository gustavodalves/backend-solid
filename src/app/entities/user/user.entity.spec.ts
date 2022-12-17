import { User } from './user.entity';

describe('User', () => {
    it('Should be able create user', () => {
        const user = new User({
            name: 'Gustavo Duarte Alves',
            birthDate: new Date(),
            email: 'gualves2001@icliud.com',
            password: 'Mkjidnju8787@'
        });

        expect(user).toBeInstanceOf(User);
    });
});
