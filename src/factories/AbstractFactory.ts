import { UNDEFINED_FACTORY_METHOD } from "../messages";
import { IFactory } from "../typings/interfaces";

/**
 * Abstract factory class to generate factories.
 */
abstract class AbstractFactory<T> implements IFactory<T> {
  private name: string;
  private providers: Map<string, T>;

  constructor(name: string) {
    this.name = name;
    this.providers = new Map<string, T>();
  }

  get(key: string): T {
    if (this.providers.has(key)) {
      return this.providers.get(key) as T;
    }

    throw new Error(UNDEFINED_FACTORY_METHOD);
  }

  set(key: string, value: T) {
    this.providers.set(key, value);
  }

  setAll(map: Map<string, T>) {
    this.providers = map;
  }
}

export default AbstractFactory;
