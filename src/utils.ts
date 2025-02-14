import { Dirent } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";

export const currentPath = process.cwd();

export async function getFileList({
  directoryPath = currentPath,
  isAbsolute = false,
  excludeFolders = false
}: { directoryPath?: string; isAbsolute?: boolean; excludeFolders?: boolean; } = {}): Promise<string[]> {
  let fileList = await fs.readdir(directoryPath, { withFileTypes: true });
  if (excludeFolders) {
    fileList = fileList.filter(file => !file.isDirectory());
  }
  const formattedFileList: string[] = fileList.map(file => {
    let formattedPath: string = isAbsolute ? path.resolve(directoryPath, file.name) : file.name;
    formattedPath = formattedPath + (file.isDirectory() ? path.sep : "");
    return formattedPath;
  });
  return formattedFileList;
}

export async function renameFile(oldPath: string, newPath: string): Promise<void> {
  try {
    await fs.rename(oldPath, newPath);
    return;
  } catch (err) {
    console.log(err);
  }
};
