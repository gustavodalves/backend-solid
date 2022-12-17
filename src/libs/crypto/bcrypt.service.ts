import * as bcrypt from 'bcryptjs';

import { CryptoService } from './crypto.service';

export class BCryptService implements CryptoService {
    hash(s: string) {
        return bcrypt.hashSync(s);
    }

    compare(s: string, hash: string): boolean {
        return bcrypt.compareSync(s, hash);
    }
}
