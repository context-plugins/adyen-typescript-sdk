import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Value3 = {
  AcquirerId: "acquirerId",
  Amount: "amount",
  Currency: "currency",
  MerchantId: "merchantId",
  MerchantName: "merchantName",
} as const;
export type Value3 = (typeof Value3)[keyof typeof Value3] | (string & {});

export const value3Schema: EnumSchema<Value3> = s.enumOf<Value3>(Value3);
