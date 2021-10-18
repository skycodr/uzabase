import { LoaderFactory } from "../factories";
import { CmdLoadFile, CmdLoadURL } from "../loaders";

// Setup all factories
export const LOADER_FACTORY: LoaderFactory = new LoaderFactory();

LOADER_FACTORY.setAll(
  new Map([
    ["file", new CmdLoadFile()],
    ["url", new CmdLoadURL()],
  ])
);
