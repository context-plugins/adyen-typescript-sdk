import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { company2Schema, type Company2 } from "./company2.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";

export type ListCompanyResponse = {
  /** Pagination references. */
  links?: PaginationLinks1;
  /** The list of companies. */
  data?: Company2[];
  /** Total number of items. */
  itemsTotal: number;
  /** Total number of pages. */
  pagesTotal: number;
};

export const listCompanyResponseSchema: Schema<ListCompanyResponse> = s.object<ListCompanyResponse>({
  links: s.optional(s.lazy(() => paginationLinks1Schema)),
  data: s.optional(s.array(s.lazy(() => company2Schema))),
  itemsTotal: s.int(),
  pagesTotal: s.int(),
  _keysMap: {
    links: "_links",
  },
});
