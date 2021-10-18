import { ICommand } from "../typings/interfaces";
import { TData } from "../typings/types";

/**
 * Trim command
 */
class CmdTrim implements ICommand {
  do(data: TData): TData {
    throw new Error("Method not implemented.");
  }
}

export default CmdTrim;
