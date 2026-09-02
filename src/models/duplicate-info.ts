import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DuplicateInfo = {
  duplicateTransactionId: string;
  sameCard: boolean;
  sameIssuer?: boolean;
};

export const duplicateInfoSchema: Schema<DuplicateInfo> = s.object<DuplicateInfo>({
  duplicateTransactionId: s.string(),
  sameCard: s.boolean(),
  sameIssuer: s.optional(s.boolean()),
});
