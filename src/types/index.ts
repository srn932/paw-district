export type Service = {
  slug: string;
  name: string;
  kicker: string;
  headline: string;
  intro: string;
  description: string;
  color: string;
  image: string;
  imagePosition?: string;
  features: string[];
  flow: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};
