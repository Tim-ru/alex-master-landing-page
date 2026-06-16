import { readFile } from "node:fs/promises";
import { join } from "node:path";

type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  style: "normal" | "italic";
};

const fontPath = join(process.cwd(), "public", "fonts", "arial-bold.ttf");

export async function loadOgFonts(): Promise<OgFont[]> {
  try {
    const fontFile = await readFile(fontPath);
    const data = fontFile.buffer.slice(
      fontFile.byteOffset,
      fontFile.byteOffset + fontFile.byteLength
    );

    return [{ name: "Manrope", data, weight: 800, style: "normal" }];
  } catch {
    return [];
  }
}
