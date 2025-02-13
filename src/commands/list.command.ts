import { ArgumentsCamelCase, CommandModule } from "yargs";
import { getFileList, currentPath } from "../utils.js";

type ListOptions = {
  absolute: boolean;
  path?: string;
};

export const listCommand: CommandModule<{}, ListOptions> = {
  command: "list",
  describe: "list the files in current directory",
  builder: (yargs) => {
    return yargs.option("absolute", {
      alias: "a",
      type: "boolean",
      desc: "display absolute paths",
      default: false
    })
      .option("path", {
        alias: "p",
        type: "string",
      });
  },
  handler: async (argv: ArgumentsCamelCase<ListOptions>) => {
    const fileList = await getFileList({
      isAbsolute: argv.absolute,
      directoryPath: argv.path
    });
    for (let file of fileList) {
      process.stdout.write(file + "\n");
    }
  }
};

