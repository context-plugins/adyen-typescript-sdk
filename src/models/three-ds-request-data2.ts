import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { challengeWindowSizeSchema, type ChallengeWindowSize } from "./challenge-window-size.js";
import { dataOnlySchema, type DataOnly } from "./data-only.js";
import { nativeThreeDsSchema, type NativeThreeDs } from "./native-three-ds.js";
import { threeDsVersionSchema, type ThreeDsVersion } from "./three-ds-version.js";

/** Object with additional parameters for the 3D Secure authentication flow. */
export type ThreeDsRequestData2 = {
  /**
   * Dimensions of the 3DS2 challenge window to be displayed to the cardholder.
   *
   * Possible values:
   *
   * * **01** - size of 250x400
   * * **02** - size of 390x400
   * * **03** - size of 500x600
   * * **04** - size of 600x400
   * * **05** - Fullscreen
   */
  challengeWindowSize?: ChallengeWindowSize;
  /**
   * Required to trigger the [data-only
   * flow](https://docs.adyen.com/online-payments/3d-secure/data-only/). When set to **true**,
   * forces the 3D Secure 2 data-only flow for all transactions where it is possible.
   */
  dataOnly?: DataOnly;
  /**
   * Indicates if [native 3D Secure
   * authentication](https://docs.adyen.com/online-payments/3d-secure/native-3ds2) should be
   * triggered when available. Adyen can still select to fallback to the redirect flow to optimize
   * authorization rates and improve the shopper's experience.
   *
   * Possible values:
   * * **preferred**: Use native 3D Secure authentication when available.
   * * **disabled**: Use the redirect 3D Secure authentication flow.
   */
  nativeThreeDs?: NativeThreeDs;
  /**
   * The version of 3D Secure to use.
   *
   * Possible values:
   *
   * * **2.1.0**
   * * **2.2.0**
   */
  threeDsVersion?: ThreeDsVersion;
};

export const threeDsRequestData2Schema: Schema<ThreeDsRequestData2> = s.object<ThreeDsRequestData2>({
  challengeWindowSize: s.optional(s.lazy(() => challengeWindowSizeSchema)),
  dataOnly: s.optional(s.lazy(() => dataOnlySchema)),
  nativeThreeDs: s.optional(s.lazy(() => nativeThreeDsSchema)),
  threeDsVersion: s.optional(s.lazy(() => threeDsVersionSchema)),
  _keysMap: {
    nativeThreeDs: "nativeThreeDS",
    threeDsVersion: "threeDSVersion",
  },
});
