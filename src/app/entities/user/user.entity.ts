import { Replace } from '../../../helpers/Replace';
import { BCryptService } from '../../../libs/crypto/bcrypt.service';
import { Password } from './props/password';

import { v4 as uuidv4 } from 'uuid';
import { Email } from './props/email';

interface UserProps {
    id: string;
    name: string;
    email: Email;
    password: Password;
    birthDate: Date;
    createdAt: Date;
}

export class User {
    private props: UserProps;

    constructor(props: Replace<UserProps, { createdAt?: Date, id?: string, password: string, email: string }>) {
        this.props = {
            ...props,
            id: uuidv4(),
            createdAt: props.createdAt ?? new Date(),
            password: new Password(props.password, new BCryptService()),
            email: new Email(props.email),
        };
    }

    get id(): string {
        return this.props.id;
    }

    get name(): string {
        return this.props.name;
    }

    get email(): Email {
        return this.props.email;
    }

    get password(): Password {
        return this.props.password;
    }

    get birthDate(): Date {
        return this.props.birthDate;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }
}
