import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StoredValueVoidRequest = {
  /** The merchant account identifier, with which you want to process the transaction. */
  merchantAccount: string;
  /** The original pspReference of the payment to modify. */
  originalReference: string;
  /**
   * Your reference for the payment modification. This reference is visible in Customer Area and in
   * reports. Maximum length: 80 characters.
   */
  reference?: string;
  /** The physical store, for which this payment is processed. */
  store?: string;
  /** The reference of the tender. */
  tenderReference?: string;
  /** The unique ID of a POS terminal. */
  uniqueTerminalId?: string;
};

export const storedValueVoidRequestSchema: Schema<StoredValueVoidRequest> = s.object<StoredValueVoidRequest>({
  merchantAccount: s.string(),
  originalReference: s.string(),
  reference: s.optional(s.string()),
  store: s.optional(s.string()),
  tenderReference: s.optional(s.string()),
  uniqueTerminalId: s.optional(s.string()),
});
