import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of error.
 *
 * Possible values:
 * * **invalidInput**
 * * **dataMissing**
 * * **pendingStatus**
 * * **rejected**
 * * **dataReview**
 */
export const Type512 = {
  DataMissing: "dataMissing",
  DataReview: "dataReview",
  InvalidInput: "invalidInput",
  PendingStatus: "pendingStatus",
  Rejected: "rejected",
} as const;
export type Type512 = (typeof Type512)[keyof typeof Type512] | (string & {});

export const type512Schema: EnumSchema<Type512> = s.enumOf<Type512>(Type512);
