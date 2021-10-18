import CmdLoadURI from "./CmdLoadURI";

/**
 * Load resource from file
 */
class CmdLoadFile extends CmdLoadURI {
  exists(uri: string): void {
    throw new Error("Method not implemented.");
  }

  async load(uri: string): Promise<string> {
    return `uri: ${uri} - xml`;
  }
}

export default CmdLoadFile;
