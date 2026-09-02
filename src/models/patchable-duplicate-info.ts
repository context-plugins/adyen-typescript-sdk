import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PatchableDuplicateInfo = {
  duplicateTransactionId?: string;
  sameCard?: boolean;
  sameIssuer?: boolean | null;
};

export const patchableDuplicateInfoSchema: Schema<PatchableDuplicateInfo> = s.object<PatchableDuplicateInfo>({
  duplicateTransactionId: s.optional(s.string()),
  sameCard: s.optional(s.boolean()),
  sameIssuer: s.optionalNullable(s.boolean()),
});
