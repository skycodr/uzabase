import chalk from "chalk";
import { URL } from "url";
import { TResource } from "../typings/types";

export const isURL = (uri: string): TResource => {
  let flag: TResource = "url";
  try {
    new URL(uri);
  } catch (ex) {
    flag = "file";
  } finally {
    return flag;
  }
};

export const format = (msg: string, style: "info" | "warning" | "error") => {
  return {
    info: chalk.green`${msg}`,
    warning: chalk.yellow`${msg}`,
    error: chalk.red`${msg}`,
  }[style];
};

// @ts-ignore
export const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
