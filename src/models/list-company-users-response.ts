import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyUserSchema, type CompanyUser } from "./company-user.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";

export type ListCompanyUsersResponse = {
  /** Pagination references. */
  links?: PaginationLinks1;
  /** The list of users. */
  data?: CompanyUser[];
  /** Total number of items. */
  itemsTotal: number;
  /** Total number of pages. */
  pagesTotal: number;
};

export const listCompanyUsersResponseSchema: Schema<ListCompanyUsersResponse> =
  s.object<ListCompanyUsersResponse>({
    links: s.optional(s.lazy(() => paginationLinks1Schema)),
    data: s.optional(s.array(s.lazy(() => companyUserSchema))),
    itemsTotal: s.int(),
    pagesTotal: s.int(),
    _keysMap: {
      links: "_links",
    },
  });
