export type RelatedLink = {
  label: string;
  href: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Review = {
  name: string;
  district: string;
  problem: string;
  solution: string;
  text: string;
};

export type SymptomPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  signs: string[];
  possibleCauses: string[];
  selfCheckSteps: string[];
  whenNeedMaster: string[];
  priceNote: string;
  faq: FAQItem[];
  relatedLinks: RelatedLink[];
};

export type BrandPage = {
  slug: string;
  brand: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  commonProblems: string[];
  commonErrorCodes: string[];
  faq: FAQItem[];
  relatedLinks: RelatedLink[];
};

export type ErrorCodePage = {
  brandSlug: string;
  code: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  meaning: string;
  symptoms: string[];
  possibleCauses: string[];
  selfCheckSteps: string[];
  whenNeedMaster: string[];
  relatedLinks: RelatedLink[];
};

export type PageSummary = {
  title: string;
  description: string;
  href: string;
};

export type PriceItem = {
  service: string;
  priceRange: string;
};
