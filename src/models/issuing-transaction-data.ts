import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IssuingTransactionData = {
  captureCycleId?: string;
  type: "issuingTransactionData";
};

export const issuingTransactionDataSchema: Schema<IssuingTransactionData> = s.object<IssuingTransactionData>({
  captureCycleId: s.optional(s.string()),
  type: s.literal("issuingTransactionData"),
});
