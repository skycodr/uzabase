import { ICommand } from "../typings/interfaces";
import { TData } from "../typings/types";

/**
 * Abstract command to load resources either from file or url
 */
abstract class CmdLoadURI implements ICommand {
  async do(data: TData): Promise<TData> {
    const { i: uri } = data as TData;

    await this.exists(uri);

    return (async () => {
      const rawData = await this.load(uri);
      return { ...data, data: rawData };
    })();
  }

  abstract exists(uri: string): void;
  abstract load(uri: string): Promise<string>;
}

export default CmdLoadURI;
