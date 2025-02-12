import fs from "node:fs/promises";

async function renameFile(oldPath: string, newPath: string): Promise<void> {
  try {
    await fs.rename(oldPath, newPath);
    return;
  } catch (err) {
    console.log(err);
  }
};

export {
  renameFile
};
