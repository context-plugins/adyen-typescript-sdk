import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { challengeWindowSizeSchema, type ChallengeWindowSize } from "./challenge-window-size.js";

export type AdditionalData3DSecure = {
  allow3Ds2?: string;
  challengeWindowSize?: ChallengeWindowSize;
  executeThreeD?: string;
  mpiImplementationType?: string;
  scaExemption?: string;
  threeDsVersion?: string;
};

export const additionalData3DSecureSchema: Schema<AdditionalData3DSecure> = s.object<AdditionalData3DSecure>({
  allow3Ds2: s.optional(s.string()),
  challengeWindowSize: s.optional(s.lazy(() => challengeWindowSizeSchema)),
  executeThreeD: s.optional(s.string()),
  mpiImplementationType: s.optional(s.string()),
  scaExemption: s.optional(s.string()),
  threeDsVersion: s.optional(s.string()),
  _keysMap: {
    allow3Ds2: "allow3DS2",
    threeDsVersion: "threeDSVersion",
  },
});
