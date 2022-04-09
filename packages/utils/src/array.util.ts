export class ArrayUtils {
  public static isPresent<T>(value: any): value is Array<T> {
    return value !== undefined && value !== null;
  }
}
