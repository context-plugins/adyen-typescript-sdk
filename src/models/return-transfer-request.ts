import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type ReturnTransferRequest = {
  /** Contains information about the amount to be returned. */
  amount: Amount17;
  /**
   * Your internal reference for the return. If you don't provide this in the request, Adyen
   * generates a unique reference. This reference is used in all communication with you about the
   * instruction status.
   *
   * We recommend using a unique value per instruction. If you need to provide multiple references
   * for a transaction, separate them with hyphens ("-").
   */
  reference?: string;
};

export const returnTransferRequestSchema: Schema<ReturnTransferRequest> = s.object<ReturnTransferRequest>({
  amount: amount17Schema,
  reference: s.optional(s.string()),
});
