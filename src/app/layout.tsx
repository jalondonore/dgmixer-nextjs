import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nexa = localFont({
  src: "./fonts/nexa-black.otf",
  variable: "--font-nexa",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drug Interaction Tool | What happens when you mix...",
  description:
    "Explore the short- and long-term health risks of mixing alcohol, marijuana, cocaine, heroin and meth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nexa.variable}>
      <body>
        <main className="page">{children}</main>
      </body>
    </html>
  );
}
