import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RevealPinResponse = {
  encryptedPinBlock: string;
  token: string;
};

export const revealPinResponseSchema: Schema<RevealPinResponse> = s.object<RevealPinResponse>({
  encryptedPinBlock: s.string(),
  token: s.string(),
});
