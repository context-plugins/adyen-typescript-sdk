import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of error.
 *
 *
 *
 * Possible values:
 * * **invalidInput**
 * * **dataMissing**
 * * **pendingStatus**
 * * **dataReview**
 */
export const Type212 = {
  DataMissing: "dataMissing",
  DataReview: "dataReview",
  InvalidInput: "invalidInput",
  PendingStatus: "pendingStatus",
} as const;
export type Type212 = (typeof Type212)[keyof typeof Type212] | (string & {});

export const type212Schema: EnumSchema<Type212> = s.enumOf<Type212>(Type212);
