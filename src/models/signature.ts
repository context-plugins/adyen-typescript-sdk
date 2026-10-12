import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Signature = {
  /**
   * If `skipSignature` is false, indicates whether the shopper should provide a signature on the
   * display (**true**) or on the merchant receipt (**false**).
   */
  askSignatureOnScreen?: boolean;
  /** Name that identifies the terminal. */
  deviceName?: string;
  /** Slogan shown on the start screen of the device. */
  deviceSlogan?: string;
  /**
   * Skip asking for a signature. This is possible because all global card schemes (American
   * Express, Diners, Discover, JCB, MasterCard, VISA, and UnionPay) regard a signature as optional.
   */
  skipSignature?: boolean;
};

export const signatureSchema: Schema<Signature> = s.object<Signature>({
  askSignatureOnScreen: s.optional(s.boolean()),
  deviceName: s.optional(s.string()),
  deviceSlogan: s.optional(s.string()),
  skipSignature: s.optional(s.boolean()),
});
