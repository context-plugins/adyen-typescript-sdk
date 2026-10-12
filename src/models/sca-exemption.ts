import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of exemption for Strong Customer Authentication (SCA). Possible values:
 * * **lowerLimit**: the newly created limit is lower than the existing limit.
 * * **notRegulated**: the limit is created in a country, region, or industry where it is not
 *   mandated by law to use SCA.
 * * **setByPlatform**: you set a limit for one of your user's balance accounts, or for your balance
 *   platform.
 * * **initialLimit**: there are no existing transfer limits set on the balance account or balance
 *   platform.
 * * **alreadyPerformed**: you are confident about your user's identity and do not need to verify
 *   this using SCA.
 */
export const ScaExemption = {
  SetByPlatform: "setByPlatform",
  InitialLimit: "initialLimit",
  LowerLimit: "lowerLimit",
  NotRegulated: "notRegulated",
  AlreadyPerformed: "alreadyPerformed",
} as const;
export type ScaExemption = (typeof ScaExemption)[keyof typeof ScaExemption] | (string & {});

export const scaExemptionSchema: EnumSchema<ScaExemption> = s.enumOf<ScaExemption>(ScaExemption);
