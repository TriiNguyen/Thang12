import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

export const bufferToBase64 = (buffer: Buffer): string => {
  return `data:image/png;base64,${buffer.toString("base64")}`;
};

export const getFileBufferLocal = async (filepath: string) => {
  // filepath is file addess exactly how is used in Image component (/ = public/)
  const realFilepath = path.join(process.cwd(), "public", filepath);
  return fs.readFile(realFilepath);
};

export const getPlaceholderImage = async (filepath: string) => {
  try {
    const originalBuffer = await getFileBufferLocal(filepath);
    const resizedBuffer = await sharp(originalBuffer).resize(20).toBuffer();
    return {
      src: filepath,
      placeholder: bufferToBase64(resizedBuffer),
    };
  } catch {
    return {
      src: filepath,
      placeholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==",
    };
  }
};
