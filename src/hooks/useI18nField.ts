import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

function useI18nField(fieldName: string, namespaces: string[]) {
  const { t, i18n } = useTranslation(namespaces);
  const [field, setField] = useState<string>('');
  useEffect(() => {
    const updateField = () => {
      setField(t(fieldName));
    };

    updateField();

    i18n.on('languageChanged', updateField);

    return () => {
      i18n.off('languageChanged', updateField);
    };
  }, [fieldName, t, i18n]);
  return field;
}

export default useI18nField;
