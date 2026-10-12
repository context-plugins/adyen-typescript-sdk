import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type12Schema, type Type12 } from "./type12.js";

export type BillDesk = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The issuer id of the shopper's selected bank. */
  issuer: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /**
   * **billdesk**
   */
  type: Type12;
};

export const billDeskSchema: Schema<BillDesk> = s.object<BillDesk>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.string(),
  sdkData: s.optional(s.string()),
  type: type12Schema,
});
