import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Textbound Adventures — Every word opens a world",
  description: "Modern interactive fiction for iPhone, iPad, and Mac.",
  metadataBase: new URL("https://textboundadventures.com"),
  openGraph: {
    title: "Textbound Adventures — Every word opens a world",
    description: "Modern interactive fiction for iPhone, iPad, and Mac.",
    images: [{ url: "/og.png", width: 1536, height: 804, alt: "Textbound Adventures" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Textbound Adventures — Every word opens a world",
    description: "Modern interactive fiction for iPhone, iPad, and Mac.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
