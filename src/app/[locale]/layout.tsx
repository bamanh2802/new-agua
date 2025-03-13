import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '@/components/home/Navbar/navbarHidden';
import Header from '@/components/home/layout/header';
import BgAndNavbar from '@/components/home/Navbar/bgAndNavbar';
import Footer from '@/components/home/layout/footer';

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

export const metadata = {
  title: "Agua International Education",
  description: "Agua International Education - Nơi giáo dục quốc tế hàng đầu.",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!routing.locales.includes(locale as any)) {
    console.log(locale);
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <Header />
          <BgAndNavbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
