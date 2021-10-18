import yargs from "yargs";
import { ICommand } from "../typings/interfaces";
import { TCmdArgs, TData } from "../typings/types";

import { MISSING_OR_INVALID_OPTIONS } from "../messages";

/**
 * Parse command line data
 */
class CmdParseLine implements ICommand {
  validate(argc: string | string[]): boolean {
    return !(argc === undefined || argc instanceof Array);
  }

  do(): TData {
    const argv: TCmdArgs = yargs.argv as unknown as TCmdArgs;
    const { t, i, c, f } = argv;

    if (!(this.validate(t) && this.validate(i))) {
      throw new Error(MISSING_OR_INVALID_OPTIONS);
    }
    return { t, i, c, f: f || "__console__", data: undefined };
  }
}

export default CmdParseLine;
