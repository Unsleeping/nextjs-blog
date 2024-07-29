const dictionaries = {
  en: () =>
    import("./../dictionaries/en.json").then((module) => module.default),
  ru: () =>
    import("./../dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (!locale) {
    return dictionaries["ru"]();
  } else {
    return dictionaries[locale as "en" | "ru"]();
  }
};
