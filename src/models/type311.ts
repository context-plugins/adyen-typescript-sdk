import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type311 = {
  DataMissing: "dataMissing",
  DataReview: "dataReview",
  InvalidInput: "invalidInput",
  PendingStatus: "pendingStatus",
} as const;
export type Type311 = (typeof Type311)[keyof typeof Type311] | (string & {});

export const type311Schema: EnumSchema<Type311> = s.enumOf<Type311>(Type311);
