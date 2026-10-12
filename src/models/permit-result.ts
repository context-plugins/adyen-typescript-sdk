import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PermitResult = {
  /** The key to link permit requests to permit results. */
  resultKey?: string;
  /** The permit token which is used to make payments by the partner company. */
  token?: string;
};

export const permitResultSchema: Schema<PermitResult> = s.object<PermitResult>({
  resultKey: s.optional(s.string()),
  token: s.optional(s.string()),
});
