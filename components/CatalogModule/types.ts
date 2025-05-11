export interface CatalogItem {
  id: string;
  title: string;
  slug: string;
  schoolTypes?: { nodes: { slug: string; name: string }[] };
  courseTypes?: { nodes: { slug: string; name: string }[] };
  branchTypes?: { nodes: { slug: string }[] };
  deliveryModeTypes?: { nodes: { slug: string }[] };
  [key: string]: any; // optional: allows flexibility
}
