import fs from "node:fs/promises";

export const currentPath = process.cwd();


export async function getFileList({
  path = currentPath,
  isAbsolute = false
}: { path?: string; isAbsolute?: boolean; } = {}): Promise<string[]> {
  const fileList = await fs.readdir(currentPath);
  return fileList;
}
