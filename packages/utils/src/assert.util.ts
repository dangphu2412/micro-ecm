import { InvalidArgumentsException } from './exception/invalid.exception';

export class Assert {
  public static isTrue(condition: boolean, messageOrConsumer?: string): void;
  public static isTrue(
    condition: boolean,
    messageOrConsumer?: () => Error,
  ): void;

  public static isTrue(
    condition: boolean,
    messageOrConsumer?: (() => Error) | string,
  ): void {
    if (!condition) {
      if (messageOrConsumer) {
        if (typeof messageOrConsumer === 'string') {
          throw new InvalidArgumentsException(messageOrConsumer);
        } else if (typeof messageOrConsumer === 'function') {
          throw messageOrConsumer();
        }
        throw new InvalidArgumentsException();
      }
    }
  }

  public static isFalse(condition: boolean, consumer?: () => Error): void {
    Assert.isTrue(!condition, consumer);
  }
}