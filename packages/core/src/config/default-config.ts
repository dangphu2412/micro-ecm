import { AutoConfig } from './auto-config.decorator';

@AutoConfig({
  configFilePath: './config.json',
  componentsScan: '*/*.(*.controller|*.service).ts',
})
export class DefaultEcmConfig {}