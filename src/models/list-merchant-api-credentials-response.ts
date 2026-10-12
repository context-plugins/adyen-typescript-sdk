import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiCredentialSchema, type ApiCredential } from "./api-credential.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";

export type ListMerchantApiCredentialsResponse = {
  /** Pagination references. */
  links?: PaginationLinks1;
  /** The list of API credentials. */
  data?: ApiCredential[];
  /** Total number of items. */
  itemsTotal: number;
  /** Total number of pages. */
  pagesTotal: number;
};

export const listMerchantApiCredentialsResponseSchema: Schema<ListMerchantApiCredentialsResponse> =
  s.object<ListMerchantApiCredentialsResponse>({
    links: s.optional(s.lazy(() => paginationLinks1Schema)),
    data: s.optional(s.array(s.lazy(() => apiCredentialSchema))),
    itemsTotal: s.int(),
    pagesTotal: s.int(),
    _keysMap: {
      links: "_links",
    },
  });
