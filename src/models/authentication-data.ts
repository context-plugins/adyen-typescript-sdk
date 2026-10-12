import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attemptAuthenticationSchema, type AttemptAuthentication } from "./attempt-authentication.js";
import { threeDsRequestData2Schema, type ThreeDsRequestData2 } from "./three-ds-request-data2.js";

export type AuthenticationData = {
  /**
   * Indicates when 3D Secure authentication should be attempted. This overrides all other rules,
   * including [Dynamic 3D Secure
   * settings](https://docs.adyen.com/risk-management/dynamic-3d-secure).
   *
   * Possible values:
   *
   * * **always**: Perform 3D Secure authentication.
   * * **never**: Don't perform 3D Secure authentication. If PSD2 SCA or other national regulations
   *   require authentication, the transaction gets declined.
   */
  attemptAuthentication?: AttemptAuthentication;
  /**
   * Required to trigger the [authentication-only
   * flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to
   * **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the
   * payment authorization. Default: **false**.
   *
   * @default false
   */
  authenticationOnly?: boolean;
  /** Object with additional parameters for the 3D Secure authentication flow. */
  threeDsRequestData?: ThreeDsRequestData2;
};

export const authenticationDataSchema: Schema<AuthenticationData> = s.object<AuthenticationData>({
  attemptAuthentication: s.optional(s.lazy(() => attemptAuthenticationSchema)),
  authenticationOnly: s.defaulted(s.boolean(), false),
  threeDsRequestData: s.optional(s.lazy(() => threeDsRequestData2Schema)),
  _keysMap: {
    threeDsRequestData: "threeDSRequestData",
  },
});
