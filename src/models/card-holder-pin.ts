import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinFormat1Schema, type PinFormat1 } from "./pin-format1.js";

export type CardHolderPin = {
  encrPinBlock: string;
  /**
   * Possible values:
   * * **ISO0**
   * * **ISO1**
   * * **ISO2**
   * * **ISO3**
   */
  pinFormat: PinFormat1;
  additionalInput?: string;
};

export const cardHolderPinSchema: Schema<CardHolderPin> = s.object<CardHolderPin>({
  encrPinBlock: s.string(),
  pinFormat: pinFormat1Schema,
  additionalInput: s.optional(s.string()),
  _keysMap: {
    encrPinBlock: "EncrPINBlock",
    pinFormat: "PINFormat",
    additionalInput: "AdditionalInput",
  },
});
