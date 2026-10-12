import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * **dragonpay**
 */
export const Type28 = {
  DragonpayEbanking: "dragonpay_ebanking",
  DragonpayOtcBanking: "dragonpay_otc_banking",
  DragonpayOtcNonBanking: "dragonpay_otc_non_banking",
  DragonpayOtcPhilippines: "dragonpay_otc_philippines",
} as const;
export type Type28 = (typeof Type28)[keyof typeof Type28] | (string & {});

export const type28Schema: EnumSchema<Type28> = s.enumOf<Type28>(Type28);
