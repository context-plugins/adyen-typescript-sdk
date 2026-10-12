import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates when 3D Secure authentication should be attempted. This overrides all other rules,
 * including [Dynamic 3D Secure settings](https://docs.adyen.com/risk-management/dynamic-3d-secure).
 *
 * Possible values:
 *
 * * **always**: Perform 3D Secure authentication.
 * * **never**: Don't perform 3D Secure authentication. If PSD2 SCA or other national regulations
 *   require authentication, the transaction gets declined.
 */
export const AttemptAuthentication = {
  Always: "always",
  Never: "never",
} as const;
export type AttemptAuthentication =
  | (typeof AttemptAuthentication)[keyof typeof AttemptAuthentication]
  | (string & {});

export const attemptAuthenticationSchema: EnumSchema<AttemptAuthentication> =
  s.enumOf<AttemptAuthentication>(AttemptAuthentication);
