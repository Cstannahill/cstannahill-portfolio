import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Tannahill | Portfolio",
  description: "Software developer portfolio for Christian Tannahill",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
