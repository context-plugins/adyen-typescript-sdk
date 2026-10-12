import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SeLocalAccountIdentification = {
  /**
   * The 7- to 10-digit bank account number
   * ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number,
   * separators, or whitespace.
   */
  accountNumber: string;
  /**
   * The 4- to 5-digit clearing number
   * ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or
   * whitespace.
   */
  clearingNumber: string;
  /** **seLocal** @default "seLocal" */
  type?: "seLocal";
};

export const seLocalAccountIdentificationSchema: Schema<SeLocalAccountIdentification> =
  s.object<SeLocalAccountIdentification>({
    accountNumber: s.string(),
    clearingNumber: s.string(),
    type: s.defaulted(s.literal("seLocal"), "seLocal"),
  });
