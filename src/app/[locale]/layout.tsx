import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { Metadata } from "next";
import Navbar from "@/components/pages/landing-page/navbar";
import ReactQueryProvider from "@/components/react-query/react-query-provider";
import { Inter, Jersey_10 } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { LightRays } from "@/components/ui/light-rays";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Stefans Portfolio",
  description: "My Portfolio to showcase my work",
};

const interFont = Inter({
  subsets: ["latin"],
});

const jersey10Font = Jersey_10({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jersey",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        interFont.className,
        jersey10Font.variable,
        "tracking-tighter"
      )}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <div className="w-screen h-screen">
              <ReactQueryProvider>
                <Navbar />
                <div className="overflow-hidden">{children}</div>
                <Toaster position="bottom-right" />
                <LightRays />
              </ReactQueryProvider>
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-13YKP5HR3H" />
    </html>
  );
}
