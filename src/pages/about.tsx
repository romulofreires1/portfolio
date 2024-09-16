import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface AboutProps {
  about: {
    description: {
      pt: string;
      en: string;
    };
  };
}

const About = ({ about }: AboutProps) => {
  const { t, i18n } = useTranslation('about');
  const router = useRouter();
  const [currentTitle, setCurrentTitle] = useState<string>(t('title'));
  useEffect(() => {
    const currentLocale = router.locale || 'pt-BR'; 
    if (i18n.language !== currentLocale) {
      i18n.changeLanguage(currentLocale).then(() => {
        setCurrentTitle(t('title'));
      });
    } else {
      setCurrentTitle(t('title'));
    }
  }, [router.locale, i18n, t]);

  return (
    <>
      <Head>
        <title>{`${currentTitle} | Rômulo`}</title>
      </Head>

      <div className="mt-12 md:mt-24 px-12 md:px-32">
        <h1 className="mb-16 text-5xl md:text-7xl font-bold text-center text-neon-spring">
          {currentTitle}
        </h1>

        {about.description.pt.split('\\n\\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
            <br />
          </span>
        ))}
      </div>
    </>
  );
};

const loadDescription = async () => {
  const res = await fetch(
    'https://gist.githubusercontent.com/romulofreires1/0b98e771c2e01ffc57d2c1b1a84d8174/raw/about.json',
  );
  const about = await res.json();
  return about;
};

export const getStaticProps: GetStaticProps<AboutProps> = async ({ locale }) => {
  const about = await loadDescription();

  return {
    props: { ...(await serverSideTranslations(locale as string, ['common', 'about'])), about },
    revalidate: 60,
  };
};

export default About;
