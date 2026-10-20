import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Singla — Developer Portfolio & Systems Builder",
  description:
    "Personal portfolio of Ayush Singla, BTech student at Thapar Institute of Engineering and Technology, building practical backends, deployment automation, Discord tooling, and open-source systems.",
  keywords: [
    "Ayush Singla",
    "Thapar Institute of Engineering and Technology",
    "Mansa Punjab",
    "Node.js",
    "Express",
    "MongoDB",
    "AWS",
    "Parcel",
    "Botflow",
    "Veriflow",
    "StudySync",
  ],
  authors: [{ name: "Ayush Singla", url: "https://github.com/ayushs206" }],
};

export const viewport: Viewport = {
  themeColor: "#F9F8F6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Work+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-system-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
