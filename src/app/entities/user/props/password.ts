import { CryptoService } from "../../../../libs/crypto/crypto.service";

export class Password {
    constructor(
        private password: string,
        private cryptoService: CryptoService,
    ) {
        this.value = password
    }

    get value(): string {
        return this.password;
    }

    set value(password: string) {
        const isValidPassword = this.passwordValidator(password);

        if(!isValidPassword) {
            throw new Error('Password must be contain one number and one special character');
        }

        this.password = this.cryptoService.hash(password);
    }

    private passwordValidator(password: string): boolean {
        const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
        const validPassword = regExp.test(password);

        return validPassword;
    }

}