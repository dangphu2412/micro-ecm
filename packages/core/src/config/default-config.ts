import { AutoConfig } from './auto-config.decorator';

@AutoConfig({
  configFilePath: './config.json',
})
export class DefaultEcmConfig {}