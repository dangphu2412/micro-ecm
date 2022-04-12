import 'reflect-metadata';

export class ReflectorUtils {
  public static getRequiredMetadata(key: string, target: any): any {
    if (!Reflect.hasMetadata(key, target)) {
      throw new Error(`${key} is not defined in ${target.name}`);
    }
    return Reflect.getMetadata(key, target);
  }
}