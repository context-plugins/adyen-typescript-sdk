import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of identity data. For individuals, the following types are supported. See our [onboarding
 * guide](https://docs.adyen.com/platforms/onboard-users/onboarding-steps/?onboarding_type=custom)
 * for other supported countries.
 *
 * - Australia: **driversLicense**, **passport**
 *
 * - Hong Kong: **driversLicense**, **nationalIdNumber**, **passport**
 *
 * - New Zealand: **driversLicense**, **passport**
 *
 * - Singapore: **driversLicense**, **nationalIdNumber**, **passport**
 *
 * - All other supported countries: **nationalIdNumber**
 */
export const Type132 = {
  NationalIdNumber: "nationalIdNumber",
  Passport: "passport",
  DriversLicense: "driversLicense",
  IdentityCard: "identityCard",
} as const;
export type Type132 = (typeof Type132)[keyof typeof Type132] | (string & {});

export const type132Schema: EnumSchema<Type132> = s.enumOf<Type132>(Type132);
