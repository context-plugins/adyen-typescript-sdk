import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubmitResponse = {
  additionalData?: Record<string, string>;
  pspReference: string;
  refusalReason?: string;
  resultCode: string;
};

export const submitResponseSchema: Schema<SubmitResponse> = s.object<SubmitResponse>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  pspReference: s.string(),
  refusalReason: s.optional(s.string()),
  resultCode: s.string(),
});
