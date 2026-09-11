import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Icône « ajouter à l'écran d'accueil » iOS : même mark que icon.tsx, en plus grand. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f766e",
        }}
      >
        <div
          style={{
            width: 76,
            height: 76,
            background: "#ffffff",
            borderRadius: "50% 50% 50% 0",
            transform: "rotate(45deg)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
