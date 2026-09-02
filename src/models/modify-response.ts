import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ModifyResponse = {
  additionalData?: Record<string, string>;
  pspReference: string;
  response: string;
};

export const modifyResponseSchema: Schema<ModifyResponse> = s.object<ModifyResponse>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  pspReference: s.string(),
  response: s.string(),
});
