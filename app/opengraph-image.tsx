import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#283618",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Warm top-right accent */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(221,161,94,0.22) 0%, transparent 65%)",
          }}
        />

        {/* Colour palette strip — top left */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "80px",
            display: "flex",
            gap: "8px",
          }}
        >
          {["#606C38", "#283618", "#FEFAE0", "#DDA15E", "#BC6C25"].map(
            (c) => (
              <div
                key={c}
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: c,
                  opacity: 0.7,
                }}
              />
            )
          )}
        </div>

        {/* Discipline label */}
        <div
          style={{
            display: "flex",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#DDA15E",
              opacity: 0.85,
            }}
          >
            Photography · Marketing · Design
          </span>
        </div>

        {/* Studio name */}
        <div style={{ display: "flex" }}>
          <span
            style={{
              fontSize: "80px",
              color: "#FEFAE0",
              fontStyle: "italic",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            Kim Hilton Studio
          </span>
        </div>

        {/* Bottom rule + URL */}
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "1px",
              background: "#DDA15E",
              opacity: 0.35,
            }}
          />
          <span
            style={{
              fontSize: "15px",
              color: "#FEFAE0",
              opacity: 0.35,
              letterSpacing: "0.15em",
            }}
          >
            kimhiltonstudio.com
          </span>
        </div>
      </div>
    ),
    size
  );
}
