import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PinChangeRequest = {
  encryptedKey: string;
  encryptedPinBlock: string;
  paymentInstrumentId: string;
  token: string;
};

export const pinChangeRequestSchema: Schema<PinChangeRequest> = s.object<PinChangeRequest>({
  encryptedKey: s.string(),
  encryptedPinBlock: s.string(),
  paymentInstrumentId: s.string(),
  token: s.string(),
});
