import 'reflect-metadata';
import { DefaultEcmConfig } from './config/default-config';
import { CoreMetadata } from './constant/metadata.constant';
import { EcmConfig } from './config/ecm-config';
import { ReflectorUtils } from '@micro-ecm/utils';

export class EcmBootstrap {
  constructor(private readonly config = DefaultEcmConfig) {}

  public bootstrap(): void {
    const config: EcmConfig = {
      ...ReflectorUtils.getRequiredMetadata(CoreMetadata.AUTO_CONFIG, DefaultEcmConfig),
      ...ReflectorUtils.getRequiredMetadata(CoreMetadata.AUTO_CONFIG, this.config),
    };

    console.log('ECM bootstrap');
  }
}