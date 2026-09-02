import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PublicKeyResponse = {
  publicKey: string;
  publicKeyExpiryDate: string;
};

export const publicKeyResponseSchema: Schema<PublicKeyResponse> = s.object<PublicKeyResponse>({
  publicKey: s.string(),
  publicKeyExpiryDate: s.string(),
});
