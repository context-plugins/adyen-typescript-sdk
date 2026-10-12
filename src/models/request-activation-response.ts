import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RequestActivationResponse = {
  /** The unique identifier of the company account. */
  companyId?: string;
  /** The unique identifier of the merchant account you requested to activate. */
  merchantId?: string;
};

export const requestActivationResponseSchema: Schema<RequestActivationResponse> =
  s.object<RequestActivationResponse>({
    companyId: s.optional(s.string()),
    merchantId: s.optional(s.string()),
  });
