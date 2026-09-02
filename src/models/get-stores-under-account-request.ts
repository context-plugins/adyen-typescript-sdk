import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetStoresUnderAccountRequest = {
  companyAccount: string;
  merchantAccount?: string;
};

export const getStoresUnderAccountRequestSchema: Schema<GetStoresUnderAccountRequest> =
  s.object<GetStoresUnderAccountRequest>({
    companyAccount: s.string(),
    merchantAccount: s.optional(s.string()),
  });
