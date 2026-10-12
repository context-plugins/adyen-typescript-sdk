import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Settings to skip signature, sign on display, or sign on receipt. */
export type Signature1 = {
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

export const signature1Schema: Schema<Signature1> = s.object<Signature1>({
  askSignatureOnScreen: s.optional(s.boolean()),
  deviceName: s.optional(s.string()),
  deviceSlogan: s.optional(s.string()),
  skipSignature: s.optional(s.boolean()),
});
