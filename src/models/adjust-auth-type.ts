import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdjustAuthType = {
  CardholderInitiatedTransaction: "cardholderInitiatedTransaction",
  MerchantInitiatedTransaction: "merchantInitiatedTransaction",
} as const;
export type AdjustAuthType = (typeof AdjustAuthType)[keyof typeof AdjustAuthType] | (string & {});

export const adjustAuthTypeSchema: EnumSchema<AdjustAuthType> = s.enumOf<AdjustAuthType>(AdjustAuthType);
