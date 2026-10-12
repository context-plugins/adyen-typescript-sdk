import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { merchantSchema, type Merchant } from "./merchant.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";

export type ListMerchantResponse = {
  /** Pagination references. */
  links?: PaginationLinks1;
  /** The list of merchant accounts. */
  data?: Merchant[];
  /** Total number of items. */
  itemsTotal: number;
  /** Total number of pages. */
  pagesTotal: number;
};

export const listMerchantResponseSchema: Schema<ListMerchantResponse> = s.object<ListMerchantResponse>({
  links: s.optional(s.lazy(() => paginationLinks1Schema)),
  data: s.optional(s.array(s.lazy(() => merchantSchema))),
  itemsTotal: s.int(),
  pagesTotal: s.int(),
  _keysMap: {
    links: "_links",
  },
});
