import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Data for 3DS authentication. */
export type DetailsRequestAuthenticationData1 = {
  /**
   * Required to trigger the [authentication-only
   * flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to
   * **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the
   * payment authorization.Default: **false**.
   *
   * @default false
   */
  authenticationOnly?: boolean;
};

export const detailsRequestAuthenticationData1Schema: Schema<DetailsRequestAuthenticationData1> =
  s.object<DetailsRequestAuthenticationData1>({
    authenticationOnly: s.defaulted(s.boolean(), false),
  });
