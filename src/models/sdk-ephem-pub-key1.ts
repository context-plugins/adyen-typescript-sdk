import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SdkEphemPubKey1 = {
  crv?: string;
  kty?: string;
  x?: string;
  y?: string;
};

export const sdkEphemPubKey1Schema: Schema<SdkEphemPubKey1> = s.object<SdkEphemPubKey1>({
  crv: s.optional(s.string()),
  kty: s.optional(s.string()),
  x: s.optional(s.string()),
  y: s.optional(s.string()),
});
