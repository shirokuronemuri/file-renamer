import { ArgumentsCamelCase, Argv, CommandModule } from "yargs";
import { getFileList, currentPath } from "../utils.js";

type ListOptions = {
  absolute: boolean;
  path: string;
  "exclude-folders": boolean;
};

export const listCommand: CommandModule<{}, ListOptions> = {
  command: "list",
  aliases: "l",
  describe: "list the files in current directory",
  builder: (yargs): Argv<ListOptions> => {
    return yargs
      .option("absolute", {
        alias: "a",
        type: "boolean",
        desc: "display absolute paths",
        default: false
      })
      .option("path", {
        alias: "p",
        type: "string",
        desc: "use custom path",
        default: currentPath
      })
      .option("exclude-folders", {
        alias: "e",
        type: "boolean",
        desc: "exclude folders from output",
        default: false
      }) as Argv<ListOptions>;
  },
  handler: async (argv: ArgumentsCamelCase<ListOptions>) => {
    const fileList = await getFileList({
      isAbsolute: argv.absolute,
      directoryPath: argv.path,
      excludeFolders: argv.excludeFolders
    });
    for (let file of fileList) {
      process.stdout.write(file + "\n");
    }
  }
};

