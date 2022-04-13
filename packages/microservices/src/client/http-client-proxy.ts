import { ClientProxy } from './client-proxy';
import axios from 'axios';

export class HttpClientProxy implements ClientProxy {
  constructor() {
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  }

  send(pattern: string, data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  emit(pattern: string, data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}