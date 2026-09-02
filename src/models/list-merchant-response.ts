import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { merchantSchema, type Merchant } from "./merchant.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";

export type ListMerchantResponse = {
  links?: PaginationLinks1;
  data?: Merchant[];
  itemsTotal: number;
  pagesTotal: number;
};

export const listMerchantResponseSchema: Schema<ListMerchantResponse> = s.object<ListMerchantResponse>({
  links: s.optional(s.lazy(() => paginationLinks1Schema)),
  data: s.optional(s.array(s.lazy(() => merchantSchema))),
  itemsTotal: s.number(),
  pagesTotal: s.number(),
  _keysMap: {
    links: "_links",
  },
});
