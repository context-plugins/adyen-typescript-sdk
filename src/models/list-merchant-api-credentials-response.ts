import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiCredentialSchema, type ApiCredential } from "./api-credential.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";

export type ListMerchantApiCredentialsResponse = {
  links?: PaginationLinks1;
  data?: ApiCredential[];
  itemsTotal: number;
  pagesTotal: number;
};

export const listMerchantApiCredentialsResponseSchema: Schema<ListMerchantApiCredentialsResponse> =
  s.object<ListMerchantApiCredentialsResponse>({
    links: s.optional(s.lazy(() => paginationLinks1Schema)),
    data: s.optional(s.array(s.lazy(() => apiCredentialSchema))),
    itemsTotal: s.number(),
    pagesTotal: s.number(),
    _keysMap: {
      links: "_links",
    },
  });
