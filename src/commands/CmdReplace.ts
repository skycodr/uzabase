import { ICommand } from "../typings/interfaces";
import { TData } from "../typings/types";

/**
 * Replace values command
 */
class CmdReplace implements ICommand {
  do(data: TData): TData {
    throw new Error("Method not implemented.");
  }
}

export default CmdReplace;
