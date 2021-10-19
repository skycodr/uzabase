import { Argv } from "yargs";

export type TResource = "file" | "url";
export type TMime = "xml" | "csv" | "txt";

export type TCmdLineInput = {
  t: TMime;
  i: string;
  c: string | string[];
  f: string | "__console__";
};

export type TCmdArgs = TCmdLineInput & Argv;

export type TData = {
  data: any;
} & TCmdLineInput;
