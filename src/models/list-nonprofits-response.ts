import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nonprofitSchema, type Nonprofit } from "./nonprofit.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";

export type ListNonprofitsResponse = {
  /** Pagination references. */
  links?: PaginationLinks1;
  /** Total number of items. */
  itemsTotal: number;
  /** The supported nonprofit organizations. */
  nonprofits?: Nonprofit[];
  /** Total number of pages. */
  pagesTotal: number;
};

export const listNonprofitsResponseSchema: Schema<ListNonprofitsResponse> = s.object<ListNonprofitsResponse>({
  links: s.optional(s.lazy(() => paginationLinks1Schema)),
  itemsTotal: s.int(),
  nonprofits: s.optional(s.array(s.lazy(() => nonprofitSchema))),
  pagesTotal: s.int(),
  _keysMap: {
    links: "_links",
  },
});
