export class Email {
    constructor(
        private email: string,
    ) {
        this.value = email;
    }

    set value(email: string) {
        const isValidEmail = this.validatorEmail(email);

        
        if(!isValidEmail) {
            throw new Error('email value must be email valid');
        }

        this.email = email;
    }

    get value(): string {
        return this.email;
    }

    private validatorEmail(email: string) {
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const isValidEmail = pattern.test(email);

        return isValidEmail;
    }
}
