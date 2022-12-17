import { BCryptService } from '../../../../libs/crypto/bcrypt.service';
import { Password } from './password';

describe('Password', () => {
    it('Should be create password', () => {
        const bCryptService = new BCryptService();
        const password = new Password('Mkjidnju8787@', bCryptService);

        expect(password).toBeInstanceOf(Password);
    });

    it('Should not be create password with less 8 characters, 1 character special, 1 capitalize', () => {
        const bCryptService = new BCryptService();

        expect(() => new Password('Mkj', bCryptService)).toThrow();
    });
});
