import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RegisterScaResponse = {
  id?: string;
  paymentInstrumentId?: string;
  sdkInput?: string;
  success?: boolean;
};

export const registerScaResponseSchema: Schema<RegisterScaResponse> = s.object<RegisterScaResponse>({
  id: s.optional(s.string()),
  paymentInstrumentId: s.optional(s.string()),
  sdkInput: s.optional(s.string()),
  success: s.optional(s.boolean()),
});
