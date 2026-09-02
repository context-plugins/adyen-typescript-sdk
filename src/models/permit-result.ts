import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PermitResult = {
  resultKey?: string;
  token?: string;
};

export const permitResultSchema: Schema<PermitResult> = s.object<PermitResult>({
  resultKey: s.optional(s.string()),
  token: s.optional(s.string()),
});
