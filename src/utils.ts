import { Dirent } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";

export const currentPath = process.cwd();

// TODO: fix -ap returning cwd instead of user input

export async function getFileList({
  directoryPath = currentPath,
  isAbsolute = false
}: { directoryPath?: string; isAbsolute?: boolean; } = {}): Promise<string[]> {
  const fileList = await fs.readdir(directoryPath, { withFileTypes: true });
  const formattedFileList: string[] = fileList.map(file => {
    let formattedPath: string = isAbsolute ? path.resolve(file.name) : file.name;
    formattedPath = formattedPath + (file.isDirectory() ? path.sep : "");
    return formattedPath;
  });
  return formattedFileList;
}
