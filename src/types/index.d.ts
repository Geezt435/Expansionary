import type { CollectionEntry } from "astro:content";
import type { MarkdownHeading } from "astro";

export type AboutEntry = CollectionEntry<"about">;
export type AuthorsEntry = CollectionEntry<"authors">;
export type BlogEntry = CollectionEntry<"blog">;
export type DocsEntry = CollectionEntry<"docs">;
export type HomeEntry = CollectionEntry<"home">;
export type TermsEntry = CollectionEntry<"terms">;

export type SearchableEntry = AboutEntry | AuthorsEntry | BlogEntry | DocsEntry | TermsEntry;

export type SearchableData = {
  title: string;
  description?: string;
  autodescription: boolean;
  draft: boolean;
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
