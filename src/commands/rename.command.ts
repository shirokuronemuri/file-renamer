import { ArgumentsCamelCase, Argv, CommandModule } from "yargs";

const operationTypes = ["append", "replace"] as const;
type OperationTypes = typeof operationTypes[number];

type RenameOptions = {
  pattern: string;
};

export const renameCommand: CommandModule<{}, RenameOptions> = {
  command: "rename [pattern]",
  aliases: "r",
  describe: "rename the files",
  builder: (yargs): Argv<RenameOptions> => {
    return yargs
      .positional("pattern", {
        describe: "pattern based on which the files are renamed",
        type: "string",
        demandOption: true
      });
  },
  handler: async (argv: ArgumentsCamelCase<RenameOptions>) => {
    // TODO extract <#> and * from pattern, * is old filename and <#> is the counter
    // TODO generate list of filenames
    // TODO check if there's no conflicts in filenames
    // TODO if no conflicts, rename
    // TODO show result without renaming with --preview
    // TODO add flag for changing numbering order (by name, by date created, by date modified etc)
    // TODO add flag to automatically rename the file if there are conflicts
  }
};
