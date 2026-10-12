import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";
import { storeSchema, type Store } from "./store.js";

export type ListStoresResponse = {
  /** Pagination references. */
  links?: PaginationLinks1;
  /** List of stores */
  data?: Store[];
  /** Total number of items. */
  itemsTotal: number;
  /** Total number of pages. */
  pagesTotal: number;
};

export const listStoresResponseSchema: Schema<ListStoresResponse> = s.object<ListStoresResponse>({
  links: s.optional(s.lazy(() => paginationLinks1Schema)),
  data: s.optional(s.array(s.lazy(() => storeSchema))),
  itemsTotal: s.int(),
  pagesTotal: s.int(),
  _keysMap: {
    links: "_links",
  },
});
