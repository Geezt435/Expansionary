export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

import type { CollectionEntry } from "astro:content";
import type { MarkdownHeading } from "astro";

// Make similar changes to config.ts in content folder
export type DocsData = {
  title: string;
  author: string;
  pubDatetime?: Date;
  modDatetime?: Date | null;
  description?: string;
  draft: boolean;
  tags: string[];
  hide_breadcrumbs: boolean;
  hide_toc: boolean;
  hide_sidenav: boolean;
  max_width: boolean;
};

// Define the type for docs collection
export type DocsEntry = CollectionEntry<"docs"> & {
  data: DocsData;
};

// For BaseLayout.astro
export interface BaseLayoutProps {
  title?: string | undefined;
  description?: string | undefined;
  ogImage?: URL | undefined;
}

// For TableofContents.astro
export interface HeadingProps {
  headings: {
    depth: number;
    text: string;
    id: string;
  }[];
}

// Define heading hierarchy so that we can generate ToC
export interface HeadingHierarchy extends MarkdownHeading {
  subheadings: HeadingHierarchy[];
}

export type MenuItem = {
  title?: string;
  id: string;
  children: MenuItem[];
};

// Define the type for menu items to created nested object
export type MenuItemWithDraft = {
  title?: string;
  id: string;
  draft: boolean;
  children: MenuItemWithDraft[];
};

// Define the props for the SideNavMenu component
export type SideNavMenuProps = {
  items: MenuItemWithDraft[];
  level: number;
};
