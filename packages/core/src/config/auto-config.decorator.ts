import { EcmConfig } from './ecm-config';
import 'reflect-metadata';
import { CoreMetadata } from '../constant/metadata.constant';

export function AutoConfig(config: EcmConfig): ClassDecorator {
  return function (constructor: Function) {
    Reflect.defineMetadata(CoreMetadata.AUTO_CONFIG, config, constructor);
  }
}
