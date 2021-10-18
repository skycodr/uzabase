import AbstractFactory from "./AbstractFactory";
import { CmdLoadURI } from "../loaders";
import { isURL } from "../utils";

/**
 * Factory to load resources
 */
class LoaderFactory extends AbstractFactory<CmdLoadURI> {
  constructor() {
    super(LoaderFactory.name);
  }

  get(uri: string): CmdLoadURI {
    return super.get(isURL(uri));
  }
}

export default LoaderFactory;
