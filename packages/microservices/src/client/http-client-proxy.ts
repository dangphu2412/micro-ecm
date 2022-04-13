import { ClientProxy } from './client-proxy';

export class HttpClientProxy implements ClientProxy {
  send(pattern: string, data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  emit(pattern: string, data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}