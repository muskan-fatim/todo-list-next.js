import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "TODO list app",
  description: "create a todo list ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
