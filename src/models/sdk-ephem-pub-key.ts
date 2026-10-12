import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The `sdkEphemPubKey` value as received from the 3D Secure 2 SDK. Required for `deviceChannel` set
 * to **app**.
 */
export type SdkEphemPubKey = {
  /** The `crv` value as received from the 3D Secure 2 SDK. */
  crv?: string;
  /** The `kty` value as received from the 3D Secure 2 SDK. */
  kty?: string;
  /** The `x` value as received from the 3D Secure 2 SDK. */
  x?: string;
  /** The `y` value as received from the 3D Secure 2 SDK. */
  y?: string;
};

export const sdkEphemPubKeySchema: Schema<SdkEphemPubKey> = s.object<SdkEphemPubKey>({
  crv: s.optional(s.string()),
  kty: s.optional(s.string()),
  x: s.optional(s.string()),
  y: s.optional(s.string()),
});
