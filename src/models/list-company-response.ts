import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { company2Schema, type Company2 } from "./company2.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";

export type ListCompanyResponse = {
  links?: PaginationLinks1;
  data?: Company2[];
  itemsTotal: number;
  pagesTotal: number;
};

export const listCompanyResponseSchema: Schema<ListCompanyResponse> = s.object<ListCompanyResponse>({
  links: s.optional(s.lazy(() => paginationLinks1Schema)),
  data: s.optional(s.array(s.lazy(() => company2Schema))),
  itemsTotal: s.number(),
  pagesTotal: s.number(),
  _keysMap: {
    links: "_links",
  },
});
