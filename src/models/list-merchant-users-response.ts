import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";
import { userSchema, type User } from "./user.js";

export type ListMerchantUsersResponse = {
  links?: PaginationLinks1;
  data?: User[];
  itemsTotal: number;
  pagesTotal: number;
};

export const listMerchantUsersResponseSchema: Schema<ListMerchantUsersResponse> =
  s.object<ListMerchantUsersResponse>({
    links: s.optional(s.lazy(() => paginationLinks1Schema)),
    data: s.optional(s.array(s.lazy(() => userSchema))),
    itemsTotal: s.number(),
    pagesTotal: s.number(),
    _keysMap: {
      links: "_links",
    },
  });
