import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type193 = {
  DataMissing: "dataMissing",
  DataReview: "dataReview",
  InvalidInput: "invalidInput",
  PendingStatus: "pendingStatus",
  Rejected: "rejected",
} as const;
export type Type193 = (typeof Type193)[keyof typeof Type193] | (string & {});

export const type193Schema: EnumSchema<Type193> = s.enumOf<Type193>(Type193);
