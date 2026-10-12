import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Agency = {
  /**
   * The reference number for the invoice, issued by the agency.
   * * Encoding: ASCII
   * * minLength: 1 character
   * * maxLength: 6 characters
   * * **additionalData key:** `airline.agency_invoice_number`
   */
  invoiceNumber?: string;
  /**
   * The two-letter agency plan identifier.
   * * Encoding: ASCII
   * * minLength: 2 characters
   * * maxLength: 2 characters
   * * **additionalData key:** `airline.agency_plan_name`
   */
  planName?: string;
};

export const agencySchema: Schema<Agency> = s.object<Agency>({
  invoiceNumber: s.optional(s.string()),
  planName: s.optional(s.string()),
});
