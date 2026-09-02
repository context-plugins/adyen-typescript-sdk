import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DuplicateInfo1 = {
  duplicateTransactionId: string;
  sameCard: boolean;
  sameIssuer?: boolean;
};

export const duplicateInfo1Schema: Schema<DuplicateInfo1> = s.object<DuplicateInfo1>({
  duplicateTransactionId: s.string(),
  sameCard: s.boolean(),
  sameIssuer: s.optional(s.boolean()),
});
