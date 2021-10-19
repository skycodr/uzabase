import { LOADER_FACTORY } from "../configs";
import { CmdLoadURI } from "../loaders";
import { ICommand } from "../typings/interfaces";
import { TData } from "../typings/types";

/**
 * Creates the execution sequence.
 */
class CmdSequence implements ICommand {
  build(data: TData) {}

  run(data: TData) {}

  do(data: TData) {}
}

export default CmdSequence;
