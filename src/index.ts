#!/usr/bin/env node
import yargs, { CommandModule } from "yargs";
import { hideBin } from "yargs/helpers";
import commands from "./commands/index.js";

const cli = yargs(hideBin(process.argv))
  .demandCommand()
  .strict()
  .help();


// either cast to CommandModule<{}, any> or create an inferred type that knows all the possible command option types (when you learn how to do that)
commands.forEach(command => cli.command(command as CommandModule<{}, any>));

// TODO: add usage examples

cli.parse();
