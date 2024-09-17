import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, locales, pathname, query, asPath } = router;

  const changeLanguage = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div>
      {locales?.map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          style={{
            fontWeight: locale === lng ? 'bold' : 'normal',
            margin: '0 5px',
          }}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
