import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RequestActivationResponse = {
  companyId?: string;
  merchantId?: string;
};

export const requestActivationResponseSchema: Schema<RequestActivationResponse> =
  s.object<RequestActivationResponse>({
    companyId: s.optional(s.string()),
    merchantId: s.optional(s.string()),
  });
