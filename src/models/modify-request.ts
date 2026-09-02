import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ModifyRequest = {
  additionalData?: Record<string, string>;
  merchantAccount: string;
  originalReference: string;
};

export const modifyRequestSchema: Schema<ModifyRequest> = s.object<ModifyRequest>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  merchantAccount: s.string(),
  originalReference: s.string(),
});
