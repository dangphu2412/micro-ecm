export interface ClientProxy {
  send(pattern: string, data: any): Promise<any>;
  emit(pattern: string, data: any): Promise<any>;
}