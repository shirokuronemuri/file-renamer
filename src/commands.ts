import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { getFileList, currentPath } from "./utils.js";

export function processCommands() {
  yargs(hideBin(process.argv))
    .command("list", "list the files in current directory", {}, async () => {
      const fileList = await getFileList();
      for (let file of fileList) {
        process.stdout.write(file + "\n");
      }
    })
    .demandCommand()
    .help()
    .parse();

}
