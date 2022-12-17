export type methodType = 'post' | 'get' | 'put' | 'delete'

export interface HttpServer {
    on(method: methodType, url: string, callback: Function): void;
    listen(port: number): void;
}
