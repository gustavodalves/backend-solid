export interface CryptoService {
    hash(s: string): string;
    compare(s: string, hash: string): boolean;
}
