import type { TFunction } from 'i18next';

export type NewsItem = {
  key: string;
  slug: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  body: string[];
};

type NewsCollection = {
  featured: NewsItem;
  topStories: NewsItem[];
  latestNews: NewsItem[];
  all: NewsItem[];
};

export const getNewsItems = (t: TFunction): NewsCollection => {
  const featured: NewsItem = {
    key: 'featured',
    slug: 'natanz-substation',
    image: '/images/index/temp1.png',
    category: t('newsPage.featured.category'),
    date: t('newsPage.featured.date'),
    readTime: t('newsPage.featured.readTime'),
    title: t('newsPage.featured.title'),
    excerpt: t('newsPage.featured.excerpt'),
    body: t('newsPage.featured.body', { returnObjects: true }) as string[],
  };

  const story1: NewsItem = {
    key: 'story1',
    slug: 'pelletizing-automation',
    image: '/images/Banners/temp12.jpeg',
    category: t('newsPage.items.story1.category'),
    date: t('newsPage.items.story1.date'),
    readTime: t('newsPage.items.story1.readTime'),
    title: t('newsPage.items.story1.title'),
    excerpt: t('newsPage.items.story1.excerpt'),
    body: t('newsPage.items.story1.body', { returnObjects: true }) as string[],
  };

  const story2: NewsItem = {
    key: 'story2',
    slug: 'power-distribution-upgrade',
    image: '/images/index/NatanzZobAhan.jpg',
    category: t('newsPage.items.story2.category'),
    date: t('newsPage.items.story2.date'),
    readTime: t('newsPage.items.story2.readTime'),
    title: t('newsPage.items.story2.title'),
    excerpt: t('newsPage.items.story2.excerpt'),
    body: t('newsPage.items.story2.body', { returnObjects: true }) as string[],
  };

  const news1: NewsItem = {
    key: 'news1',
    slug: 'relay-upgrade',
    image: '/images/index/post.jpg',
    category: t('newsPage.items.news1.category'),
    date: t('newsPage.items.news1.date'),
    readTime: t('newsPage.items.news1.readTime'),
    title: t('newsPage.items.news1.title'),
    excerpt: t('newsPage.items.news1.excerpt'),
    body: t('newsPage.items.news1.body', { returnObjects: true }) as string[],
  };

  const news2: NewsItem = {
    key: 'news2',
    slug: 'steel-line-cabling',
    image: '/images/index/Foolad.jpg',
    category: t('newsPage.items.news2.category'),
    date: t('newsPage.items.news2.date'),
    readTime: t('newsPage.items.news2.readTime'),
    title: t('newsPage.items.news2.title'),
    excerpt: t('newsPage.items.news2.excerpt'),
    body: t('newsPage.items.news2.body', { returnObjects: true }) as string[],
  };

  const topStories = [story1, story2];
  const latestNews = [news1, news2, story2, story1];
  const all = [featured, story1, story2, news1, news2];

  return {
    featured,
    topStories,
    latestNews,
    all,
  };
};
