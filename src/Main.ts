import { CmdParseLine } from './parsers';
import { CmdSequence } from './sequencer';

import { ICommand } from './typings/interfaces';

const { log } = console;

/**
 * Main entry point to the application
 */
class Main implements ICommand {
  do() {
    let exitCode: number = 0;

    try {
      new CmdSequence().do(new CmdParseLine().do());
    } catch (ex) {
      exitCode = 1;
      log((ex as Error).message);
    } finally {
      process.exit(exitCode);
    }
  }
}

// Bootstrap the application
new Main().do();
