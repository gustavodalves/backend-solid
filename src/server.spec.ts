import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

describe('Server', () => {
    it('Should be server create user', async () => {

        expect(async () => await api.post('/register', {
            name: 'Gustavo Duarte ALves',
            email: 'gualves2001@icloud.com',
            password: 'Paosdnkm39('
        })).toBeTruthy();

    });
});
