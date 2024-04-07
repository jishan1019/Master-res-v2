import { ThemeProvider } from "@/components/theme-provider";
import { Config } from "@/config";
import { cn } from "@/lib/utils";
import StoreProvider from "@/redux/StoreProvider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: Config.siteFullTitle,
  description: Config.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", montserrat.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            <main>{children}</main>
          </StoreProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
