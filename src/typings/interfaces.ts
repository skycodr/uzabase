import { TData } from "./types";

export interface IFactory<T> {
  get(key: string): T;
  set(key: string, value: T): void;
}

export interface ICommand {
  do(data?: TData): TData | Promise<TData> | void;
}
