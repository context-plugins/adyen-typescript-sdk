import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type23Schema, type Type23 } from "./type23.js";

export type Doku = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The shopper's first name. */
  firstName: string;
  /** The shopper's last name. */
  lastName: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** The shopper's email. */
  shopperEmail: string;
  /**
   * **doku**
   */
  type: Type23;
};

export const dokuSchema: Schema<Doku> = s.object<Doku>({
  checkoutAttemptId: s.optional(s.string()),
  firstName: s.string(),
  lastName: s.string(),
  sdkData: s.optional(s.string()),
  shopperEmail: s.string(),
  type: type23Schema,
});
