import type { ImageMetadata } from 'astro';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string | Record<string, string>>;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

export interface Stat {
  amount?: number | string;
  title?: string;
  icon?: string;
}

export interface Stats extends Omit<Headline, 'classes'>, Widget {
  stats?: Array<Stat>;
}

export interface Post {
  id: string;

  slug: string;

  permalink: string;

  publishDate: Date;
  updateDate?: Date;

  title: string;
  excerpt?: string;
  image?: ImageMetadata | string;

  //   category?: Taxonomy;
  //   tags?: Taxonomy[];
  author?: string;

  //   metadata?: MetaData;

  draft?: boolean;

  Content?: AstroComponentFactory;
  content?: string;

  readingTime?: number;
}
