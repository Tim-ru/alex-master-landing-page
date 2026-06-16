type Props = {
  title: string;
  subtitle: string;
  eyebrow?: string;
};

export function ogTemplate({ title, subtitle, eyebrow = "Alex Master" }: Props) {
  const titleSize = title.length > 55 ? 46 : title.length > 38 ? 52 : 60;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#14211B",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          padding: "64px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 13,
            fontWeight: 800,
            color: "#C9783B",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          {eyebrow}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: titleSize,
            fontWeight: 800,
            color: "#F7F4EF",
            lineHeight: 1.15,
            marginBottom: 20,
            maxWidth: 1040,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#C7D0CA",
            lineHeight: 1.5,
            maxWidth: 820,
          }}
        >
          {subtitle}
        </div>
      </div>

      {/* Copper accent line */}
      <div
        style={{ display: "flex", height: 5, backgroundColor: "#C9783B" }}
      />
    </div>
  );
}
