import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Contains the bank account details of the counterparty. The fields required in this object depend
 * on the country of the bank account and the currency of the transfer.
 */
export type MandateAccountIdentification2 = {
  type?: string;
};

export const mandateAccountIdentification2Schema: Schema<MandateAccountIdentification2> =
  s.object<MandateAccountIdentification2>({
    type: s.optional(s.string()),
  });
