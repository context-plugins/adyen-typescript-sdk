import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RevealPinResponse = {
  /** The encrypted [PIN block](https://www.pcisecuritystandards.org/glossary/pin-block). */
  encryptedPinBlock: string;
  /** The 16-digit token that you need to extract the `encryptedPinBlock`. */
  token: string;
};

export const revealPinResponseSchema: Schema<RevealPinResponse> = s.object<RevealPinResponse>({
  encryptedPinBlock: s.string(),
  token: s.string(),
});
