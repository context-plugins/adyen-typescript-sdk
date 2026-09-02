import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SdkEphemPubKey = {
  crv?: string;
  kty?: string;
  x?: string;
  y?: string;
};

export const sdkEphemPubKeySchema: Schema<SdkEphemPubKey> = s.object<SdkEphemPubKey>({
  crv: s.optional(s.string()),
  kty: s.optional(s.string()),
  x: s.optional(s.string()),
  y: s.optional(s.string()),
});
