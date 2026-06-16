type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  style: "normal" | "italic";
};

const TIMEOUT_MS = 3000;

function withTimeout<T>(promise: Promise<T>): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), TIMEOUT_MS)
    ),
  ]);
}

export async function loadOgFonts(): Promise<OgFont[]> {
  try {
    const css = await withTimeout(
      fetch("https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap", {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      }).then((r) => r.text())
    );

    const fonts: OgFont[] = [];

    for (const subset of ["/* cyrillic */", "/* latin */"]) {
      const start = css.indexOf(subset);
      if (start === -1) continue;
      const end = css.indexOf("}", start);
      const block = css.slice(start, end + 1);
      const match = block.match(/url\(([^)]+)\)/);
      if (!match?.[1]) continue;

      const data = await withTimeout(
        fetch(match[1]).then((r) => r.arrayBuffer())
      );
      fonts.push({ name: "Manrope", data, weight: 800, style: "normal" });
    }

    return fonts;
  } catch {
    return [];
  }
}
