import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PublicKeyResponse = {
  /** The public key you need for encrypting a symmetric session key. */
  publicKey: string;
  /** The expiry date of the public key. */
  publicKeyExpiryDate: string;
};

export const publicKeyResponseSchema: Schema<PublicKeyResponse> = s.object<PublicKeyResponse>({
  publicKey: s.string(),
  publicKeyExpiryDate: s.string(),
});
