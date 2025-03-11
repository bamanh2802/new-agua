import {useTranslations} from 'next-intl';
import Navbar from '@/components/home/Navbar/navbarHidden';
import ServiceAndSkill from '@/components/home/ClientFeedback/reason';
import ClientFeedback from '@/components/home/ClientFeedback/clientFeedback';
import Contact from '@/components/home/contact/contact';
import News from '@/components/home/News/news';
import './config.css'
export default function Home() {
  const t = useTranslations('HomePage');
  return (
   <>
    <ServiceAndSkill />
    <ClientFeedback />
    <News />
    <Contact />

   </>
  );
}
