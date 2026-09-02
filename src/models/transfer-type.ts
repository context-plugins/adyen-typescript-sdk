import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferType = {
  Instant: "instant",
  All: "all",
} as const;
export type TransferType = (typeof TransferType)[keyof typeof TransferType] | (string & {});

export const transferTypeSchema: EnumSchema<TransferType> = s.enumOf<TransferType>(TransferType);
