import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyUserSchema, type CompanyUser } from "./company-user.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";

export type ListCompanyUsersResponse = {
  links?: PaginationLinks1;
  data?: CompanyUser[];
  itemsTotal: number;
  pagesTotal: number;
};

export const listCompanyUsersResponseSchema: Schema<ListCompanyUsersResponse> =
  s.object<ListCompanyUsersResponse>({
    links: s.optional(s.lazy(() => paginationLinks1Schema)),
    data: s.optional(s.array(s.lazy(() => companyUserSchema))),
    itemsTotal: s.number(),
    pagesTotal: s.number(),
    _keysMap: {
      links: "_links",
    },
  });
