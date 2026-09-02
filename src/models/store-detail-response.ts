import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StoreDetailResponse = {
  additionalData?: Record<string, string>;
  pspReference: string;
  recurringDetailReference: string;
  resultCode: string;
};

export const storeDetailResponseSchema: Schema<StoreDetailResponse> = s.object<StoreDetailResponse>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  pspReference: s.string(),
  recurringDetailReference: s.string(),
  resultCode: s.string(),
});
