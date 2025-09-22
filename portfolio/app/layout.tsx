import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
export const metadata: Metadata = {
  title: "Marcel Somtochukwu",
  description: "Welcome to the master dev Portfolio of Izuoba Somtochukwu Marcel..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth overflow-x-hidden">
      <body className="duration-300 overflow-x-hidden">
        <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
