import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataSepa = {
  /**
   * The transaction signature date.
   *
   * Format: yyyy-MM-dd
   */
  sepadirectdebitDateOfSignature?: string;
  /** Its value corresponds to the pspReference value of the transaction. */
  sepadirectdebitMandateId?: string;
  /** The date that the the shopper's bank account is charged. */
  sepadirectdebitSepadirectdebitDueDate?: string;
  /**
   * This field can take one of the following values:
   * * OneOff: (OOFF) Direct debit instruction to initiate exactly one direct debit transaction.
   *
   * * First: (FRST) Initial/first collection in a series of direct debit instructions.
   * * Recurring: (RCUR) Direct debit instruction to carry out regular direct debit transactions
   *   initiated by the creditor.
   * * Final: (FNAL) Last/final collection in a series of direct debit instructions.
   *
   * Example: OOFF
   */
  sepadirectdebitSequenceType?: string;
};

export const responseAdditionalDataSepaSchema: Schema<ResponseAdditionalDataSepa> =
  s.object<ResponseAdditionalDataSepa>({
    sepadirectdebitDateOfSignature: s.optional(s.string()),
    sepadirectdebitMandateId: s.optional(s.string()),
    sepadirectdebitSepadirectdebitDueDate: s.optional(s.string()),
    sepadirectdebitSequenceType: s.optional(s.string()),
    _keysMap: {
      sepadirectdebitDateOfSignature: "sepadirectdebit.dateOfSignature",
      sepadirectdebitMandateId: "sepadirectdebit.mandateId",
      sepadirectdebitSepadirectdebitDueDate: "sepadirectdebit.sepadirectdebit.dueDate",
      sepadirectdebitSequenceType: "sepadirectdebit.sequenceType",
    },
  });
