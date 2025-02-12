import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { getFileList, currentPath } from "./utils.js";

export function processCommands() {
  yargs(hideBin(process.argv))
    .command("list", "list the files in current directory", {}, () => {
      // console.log(getFileList());
      console.log("hi");
    })
    .demandCommand()
    .help()
    .parse();

}
