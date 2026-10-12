import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UkLocalAccountIdentification = {
  /** The 8-digit bank account number, without separators or whitespace. */
  accountNumber: string;
  /**
   * The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or
   * whitespace.
   */
  sortCode: string;
  /** **ukLocal** @default "ukLocal" */
  type?: "ukLocal";
};

export const ukLocalAccountIdentificationSchema: Schema<UkLocalAccountIdentification> =
  s.object<UkLocalAccountIdentification>({
    accountNumber: s.string(),
    sortCode: s.string(),
    type: s.defaulted(s.literal("ukLocal"), "ukLocal"),
  });
