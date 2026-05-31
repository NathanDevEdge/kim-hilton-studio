export type WorkCategory = "photography" | "marketing" | "design";
export type AspectRatio = "portrait" | "landscape" | "square";

export interface WorkItem {
  slug: string;
  title: string;
  client: string;
  category: WorkCategory;
  year: string;
  shortDescription: string;
  fullDescription: string;
  gradient: string;
  aspectRatio: AspectRatio;
  tags: string[];
}
