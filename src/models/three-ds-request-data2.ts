import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { challengeWindowSizeSchema, type ChallengeWindowSize } from "./challenge-window-size.js";
import { dataOnlySchema, type DataOnly } from "./data-only.js";
import { nativeThreeDsSchema, type NativeThreeDs } from "./native-three-ds.js";
import { threeDsVersionSchema, type ThreeDsVersion } from "./three-ds-version.js";

export type ThreeDsRequestData2 = {
  challengeWindowSize?: ChallengeWindowSize;
  dataOnly?: DataOnly;
  nativeThreeDs?: NativeThreeDs;
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
