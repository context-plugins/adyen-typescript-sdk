import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaExemptionSchema, type ScaExemption } from "./sca-exemption.js";
import { scaStatusSchema, type ScaStatus } from "./sca-status.js";

export type ScaInformation = {
  /**
   * The type of exemption for Strong Customer Authentication (SCA). Possible values:
   * * **lowerLimit**: the newly created limit is lower than the existing limit.
   * * **notRegulated**: the limit is created in a country, region, or industry where it is not
   *   mandated by law to use SCA.
   * * **setByPlatform**: you set a limit for one of your user's balance accounts, or for your
   *   balance platform.
   * * **initialLimit**: there are no existing transfer limits set on the balance account or balance
   *   platform.
   * * **alreadyPerformed**: you are confident about your user's identity and do not need to verify
   *   this using SCA.
   */
  exemption?: ScaExemption;
  /**
   * The status of Strong Customer Authentication (SCA). Possible values:
   * * **notPerformed**: the requester was unable to successfully authenticate the request using
   *   SCA, or has an SCA exemption.
   * * **pending**: the request is pending SCA authentication.
   * * **performed**: the request is successfully authenticated using SCA.
   */
  status: ScaStatus;
};

export const scaInformationSchema: Schema<ScaInformation> = s.object<ScaInformation>({
  exemption: s.optional(s.lazy(() => scaExemptionSchema)),
  status: scaStatusSchema,
});
