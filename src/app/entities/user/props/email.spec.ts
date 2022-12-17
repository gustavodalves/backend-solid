import { Email } from "./email"

describe('Email', () => {
    it('Should be able to create a email user', () => {
        const email = new Email('gualves2001@icloud.com');

        expect(email).toBeInstanceOf(Email);
    })

    it('Should not be create email with invalid email', () => {
        expect(() => new Email('g@gm.c')).toThrow()
    })
})