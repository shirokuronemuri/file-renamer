import { ArgumentsCamelCase, Argv, CommandModule } from "yargs";

const operationTypes = ["single", "replace"] as const;
type OperationTypes = typeof operationTypes[number];

type RenameOptions = {
  operation: OperationTypes;
  files: string;
  pattern: string;
};

export const renameCommand: CommandModule<{}, RenameOptions> = {
  command: "rename [operation] [files] [pattern]",
  aliases: "r",
  describe: "rename the files",
  builder: (yargs): Argv<RenameOptions> => {
    return yargs
      .positional("operation", {
        describe: "possible renaming operation",
        choices: operationTypes,
        default: "single" as OperationTypes
      })
      .positional("files", {
        describe: "rule for the files that should be renamed",
        type: "string",
        demandOption: true
      })
      .positional("pattern", {
        describe: "pattern based on which the files are renamed",
        type: "string",
        demandOption: true
      });
  },
  handler: async (argv: ArgumentsCamelCase<RenameOptions>) => {
    // todo: rethink files and pattern in terms of reusability; maybe make handle operation as separate commands
  }
};
