import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Study Abroad Counseling | Book Free Counseling",
  description:
    "Conversion-focused overseas education consultancy landing page for Indian students planning to study abroad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
