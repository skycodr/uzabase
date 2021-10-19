import urlExist from "url-exist";
import { fetch } from "../utils";

import CmdLoadURI from "./CmdLoadURI";

import { FAILED_TO_LOAD_RESOURCE, RESOURCE_DOES_NOT_EXIST } from "../messages";

/**
 * Load resource from file
 */
class CmdLoadURL extends CmdLoadURI {
  async exists(uri: string) {
    if (!(await urlExist(uri))) {
      throw new Error(RESOURCE_DOES_NOT_EXIST);
    }
  }

  async load(uri: string): Promise<string> {
    try {
      const raw = await fetch(uri);
      return await raw.text();
    } catch (ex) {
      throw new Error(FAILED_TO_LOAD_RESOURCE);
    }
  }
}

export default CmdLoadURL;
