import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { getFileList, currentPath } from "./utils.js";

export function processCommands() {
  yargs(hideBin(process.argv))
    .command<{ absolute: boolean; path: string; }>("list", "list the files in current directory", (yargs) => {
      yargs.option("absolute", {
        alias: "a",
        type: "boolean",
        desc: "display absolute paths"
      });
      yargs.option("path", {
        alias: "p",
        type: "number",
        default: currentPath
      });
    }, async (argv) => {
      const fileList = await getFileList({
        isAbsolute: argv.absolute,
        directoryPath: argv.path
      });
      for (let file of fileList) {
        process.stdout.write(file + "\n");
      }
    })
    .demandCommand()
    .strict()
    .help()
    .parse();

}
