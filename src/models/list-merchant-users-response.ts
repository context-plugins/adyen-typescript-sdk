import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";
import { userSchema, type User } from "./user.js";

export type ListMerchantUsersResponse = {
  /** Pagination references. */
  links?: PaginationLinks1;
  /** The list of users. */
  data?: User[];
  /** Total number of items. */
  itemsTotal: number;
  /** Total number of pages. */
  pagesTotal: number;
};

export const listMerchantUsersResponseSchema: Schema<ListMerchantUsersResponse> =
  s.object<ListMerchantUsersResponse>({
    links: s.optional(s.lazy(() => paginationLinks1Schema)),
    data: s.optional(s.array(s.lazy(() => userSchema))),
    itemsTotal: s.int(),
    pagesTotal: s.int(),
    _keysMap: {
      links: "_links",
    },
  });
