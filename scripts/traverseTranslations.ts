import translations from '../public/locales/en/common.json';

const keys: string[] = [];

type TranslationRecord = {
  [P in string]: string | TranslationRecord;
};

const recursiveTraverseTranslations = (
  obj: TranslationRecord,
  path: string[],
) => {
  Object.keys(obj).forEach(key => {
    if (key.startsWith('_')) {
      return;
    }
    const objOrString = obj[key];
    if (typeof objOrString === 'string') {
      keys.push([...path, key].join('.'));
    } else {
      recursiveTraverseTranslations(objOrString, [...path, key]);
    }
  });
};

export const traverseTranslations = () => {
  recursiveTraverseTranslations(translations, []);
  return keys;
};
