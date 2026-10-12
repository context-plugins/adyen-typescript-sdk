import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetStoresUnderAccountRequest = {
  /**
   * The company account. If you only specify this parameter, the response includes the stores of
   * all merchant accounts that are associated with the company account.
   */
  companyAccount: string;
  /**
   * The merchant account. With this parameter, the response only includes the stores of the
   * specified merchant account.
   */
  merchantAccount?: string;
};

export const getStoresUnderAccountRequestSchema: Schema<GetStoresUnderAccountRequest> =
  s.object<GetStoresUnderAccountRequest>({
    companyAccount: s.string(),
    merchantAccount: s.optional(s.string()),
  });
