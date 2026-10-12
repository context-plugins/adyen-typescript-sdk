import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The `sdkEphemPubKey` value as received from the 3D Secure 2 SDK. */
export type SdkEphemPubKey1 = {
  /** The `crv` value as received from the 3D Secure 2 SDK. */
  crv?: string;
  /** The `kty` value as received from the 3D Secure 2 SDK. */
  kty?: string;
  /** The `x` value as received from the 3D Secure 2 SDK. */
  x?: string;
  /** The `y` value as received from the 3D Secure 2 SDK. */
  y?: string;
};

export const sdkEphemPubKey1Schema: Schema<SdkEphemPubKey1> = s.object<SdkEphemPubKey1>({
  crv: s.optional(s.string()),
  kty: s.optional(s.string()),
  x: s.optional(s.string()),
  y: s.optional(s.string()),
});
