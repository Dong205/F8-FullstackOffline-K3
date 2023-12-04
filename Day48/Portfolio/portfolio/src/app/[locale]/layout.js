import "./globals.css";
import { Providers } from "./providers";
import { useLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SessionProvider from "./SessionProviders";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params }) {
  const locale = useLocale();
  let messages = (await import(`../../../messages/${locale}.json`)).default;
  const session = await getServerSession();

  return (
    <html lang={locale} className="dark">
      <body>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <SessionProvider session={session}>
              <ToastContainer />
              <Header />
              {children}
            </SessionProvider>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}