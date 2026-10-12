import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DirectDebitInformation = {
  /**
   * The date when the direct debit mandate was accepted by your user, in
   * [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format.
   */
  dateOfSignature?: Date;
  /** The date when the funds are deducted from your user's balance account. */
  dueDate?: Date;
  /** Your unique identifier for the direct debit mandate. */
  mandateId?: string;
  /**
   * Identifies the direct debit transfer's type. Possible values: **OneOff**, **First**,
   * **Recurring**, **Final**.
   */
  sequenceType?: string;
};

export const directDebitInformationSchema: Schema<DirectDebitInformation> = s.object<DirectDebitInformation>({
  dateOfSignature: s.optional(s.dateTime()),
  dueDate: s.optional(s.dateTime()),
  mandateId: s.optional(s.string()),
  sequenceType: s.optional(s.string()),
});
