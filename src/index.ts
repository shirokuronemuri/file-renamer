#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import commands from "./commands/index.js";


const cli = yargs(hideBin(process.argv))
  .demandCommand()
  .strict()
  .help();

commands.forEach(command => cli.command(command));

cli.parse();

// for (let fileName in fileList) {
//   let newPath = "renamed_" + fileName;
//   await renameFile(fileName, newPath);

// }

