import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type252Schema, type Type252 } from "./type252.js";

export type IssuingTransactionData = {
  captureCycleId?: string;
  type: Type252;
};

export const issuingTransactionDataSchema: Schema<IssuingTransactionData> = s.object<IssuingTransactionData>({
  captureCycleId: s.optional(s.string()),
  type: type252Schema,
});
