export interface MicroserviceRequest {
  pattern: string;
  data: any;
}

export interface MicroserviceResponse {
  data: any;
}

export interface RequestResolver {
  resolve(req: MicroserviceRequest): Promise<MicroserviceResponse>;
}