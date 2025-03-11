
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '@/components/home/Navbar/navbarHidden';
import Header from '@/components/home/layout/header';
import BgAndNavbar from '@/components/home/Navbar/bgAndNavbar';
import Footer from '@/components/home/layout/footer';

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!routing.locales.includes(locale as any)) {
    console.log(locale)
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
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