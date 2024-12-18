import type { Metadata } from "next";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClerkProvider appearance={{ variables: { colorPrimary: "#874CCC" } }}>
        <html lang="en" suppressHydrationWarning>
          <head>
            <link rel="icon" href="/app/favicon.ico" />
          </head>
          <body>
            <main>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                disableTransitionOnChange
                enableSystem={false}
              >
                {children}
              </ThemeProvider>
            </main>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
