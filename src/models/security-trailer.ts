import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SecurityTrailer = {
  adyenCryptoVersion: number;
  keyIdentifier: string;
  keyVersion: number;
  nonce: string;
  hmac: string;
};

export const securityTrailerSchema: Schema<SecurityTrailer> = s.object<SecurityTrailer>({
  adyenCryptoVersion: s.number(),
  keyIdentifier: s.string(),
  keyVersion: s.number(),
  nonce: s.string(),
  hmac: s.string(),
  _keysMap: {
    adyenCryptoVersion: "AdyenCryptoVersion",
    keyIdentifier: "KeyIdentifier",
    keyVersion: "KeyVersion",
    nonce: "Nonce",
    hmac: "Hmac",
  },
});
