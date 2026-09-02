import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type36 = {
  DragonpayEbanking: "dragonpay_ebanking",
  DragonpayOtcBanking: "dragonpay_otc_banking",
  DragonpayOtcNonBanking: "dragonpay_otc_non_banking",
  DragonpayOtcPhilippines: "dragonpay_otc_philippines",
} as const;
export type Type36 = (typeof Type36)[keyof typeof Type36] | (string & {});

export const type36Schema: EnumSchema<Type36> = s.enumOf<Type36>(Type36);
