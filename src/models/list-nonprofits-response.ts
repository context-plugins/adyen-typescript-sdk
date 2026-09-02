import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nonprofitSchema, type Nonprofit } from "./nonprofit.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";

export type ListNonprofitsResponse = {
  links?: PaginationLinks1;
  itemsTotal: number;
  nonprofits?: Nonprofit[];
  pagesTotal: number;
};

export const listNonprofitsResponseSchema: Schema<ListNonprofitsResponse> = s.object<ListNonprofitsResponse>({
  links: s.optional(s.lazy(() => paginationLinks1Schema)),
  itemsTotal: s.number(),
  nonprofits: s.optional(s.array(s.lazy(() => nonprofitSchema))),
  pagesTotal: s.number(),
  _keysMap: {
    links: "_links",
  },
});
