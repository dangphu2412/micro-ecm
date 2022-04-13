export interface EcmConfig {
  configFilePath?: string;
  port?: number;
  componentsScan?: string;
}

export interface AppConfig {
  cors?: string[];
}