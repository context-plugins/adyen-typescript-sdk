import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * **molpay**
 */
export const Type38 = {
  MolpayEbankingFpxMy: "molpay_ebanking_fpx_MY",
  MolpayEbankingTh: "molpay_ebanking_TH",
} as const;
export type Type38 = (typeof Type38)[keyof typeof Type38] | (string & {});

export const type38Schema: EnumSchema<Type38> = s.enumOf<Type38>(Type38);
