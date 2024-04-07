import { ThemeProvider } from "@/components/theme-provider";
import { Config } from "@/config";
import { cn } from "@/lib/utils";
import StoreProvider from "@/redux/StoreProvider";
import getBaseURL from "@/utils/baseUrl";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const BASE_URL = await getBaseURL();

  return {
    metadataBase: new URL(BASE_URL),
    title: Config.siteFullTitle,
    description: Config.siteDescription,
    openGraph: {
      images: [
        {
          url: new URL('/home.jpg', BASE_URL),
          width: 800,
          height: 600,
          alt: Config.siteTitle,
        },
        {
          url: new URL('/home.jpg', BASE_URL),
          width: 1200,
          height: 900,
          alt: Config.siteTitle,
        },
        {
          url: new URL('/home.jpg', BASE_URL),
          width: 1920,
          height: 1440,
          alt: Config.siteTitle,
        },
        {
          url: new URL('/home.jpg', BASE_URL),
          width: 4000,
          height: 3000,
          alt: Config.siteTitle,
        }
      ],
    },
  }
}

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
        <NextTopLoader />
      </body>
    </html>
  );
}
