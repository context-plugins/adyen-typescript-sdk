import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisablePermitResult = {
  pspReference?: string;
  status?: string;
};

export const disablePermitResultSchema: Schema<DisablePermitResult> = s.object<DisablePermitResult>({
  pspReference: s.optional(s.string()),
  status: s.optional(s.string()),
});
