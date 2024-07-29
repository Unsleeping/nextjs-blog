import { RequestedCategory, RequestedPost } from "@/types/collection";

export const translatedCategories = (category: RequestedCategory) => {
  const enLocale = category.translations.find(
    (translation) => translation.languages_code === "en-US"
  );

  if (!enLocale) {
    return false;
  }

  const isCategoryFullTranslated =
    typeof enLocale.title === "string" &&
    typeof enLocale.description === "string";

  return isCategoryFullTranslated;
};

export const translatedPosts = (post: RequestedPost) => {
  const enLocale = post.translations.find(
    (translation) => translation.languages_code === "en-US"
  );

  if (!enLocale) {
    return false;
  }

  const isPostFullTranslated =
    typeof enLocale.title === "string" &&
    typeof enLocale.description === "string" &&
    typeof enLocale.body === "string";

  return isPostFullTranslated;
};
