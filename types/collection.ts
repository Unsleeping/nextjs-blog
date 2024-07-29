export type Post = {
  status: Status;
  id: string;
  title: string;
  description: string;
  category: Category;
  author: Author;
  slug: string;
  image: string;
  body: string;
  date_created: string;
  date_updated: string;
  translations: PostTranslation[];
};

type LanguageCode = "en-US";

type BaseTranslation = {
  languages_code: LanguageCode;
};

type PostTranslation = {
  title?: string;
  description?: string;
  body?: string;
} & BaseTranslation;

export type RequestedPost = {
  slug: Post["slug"];
  translations: Post["translations"];
};

type CategoryTranslation = {
  title?: string;
  description?: string;
} & BaseTranslation;

type Status = "draft" | "published" | "archived";

export type Category = {
  status: Status;
  id: string;
  title: string;
  slug: string;
  description: string;
  posts: Post[];
  translations: CategoryTranslation[];
};

export type RequestedCategory = {
  slug: Category["slug"];
  translations: Category["translations"];
};

export type Author = {
  id: string;
  first_name: string;
  last_name: string;
};
