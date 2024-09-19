import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function useI18nField(fieldName: string, namespaces: string[]) {
  const { t, i18n } = useTranslation(namespaces);
  const [field, setField] = useState<string>(t(fieldName));

  useEffect(() => {
    i18n.on('languageChanged', () => {
      setField(t(fieldName));
    });

    return () => {
      i18n.off('languageChanged');
    };
  }, [i18n, t, fieldName]);

  return field;
}

export default useI18nField;
