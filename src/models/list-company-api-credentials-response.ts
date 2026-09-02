import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyApiCredentialSchema, type CompanyApiCredential } from "./company-api-credential.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";

export type ListCompanyApiCredentialsResponse = {
  links?: PaginationLinks1;
  data?: CompanyApiCredential[];
  itemsTotal: number;
  pagesTotal: number;
};

export const listCompanyApiCredentialsResponseSchema: Schema<ListCompanyApiCredentialsResponse> =
  s.object<ListCompanyApiCredentialsResponse>({
    links: s.optional(s.lazy(() => paginationLinks1Schema)),
    data: s.optional(s.array(s.lazy(() => companyApiCredentialSchema))),
    itemsTotal: s.number(),
    pagesTotal: s.number(),
    _keysMap: {
      links: "_links",
    },
  });
