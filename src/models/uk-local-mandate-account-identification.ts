import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of MandateAccountIdentification, UKLocalMandateAccountIdentification. */
export type UkLocalMandateAccountIdentification = {
  /** **ukLocal** @default "ukLocal" */
  type?: string;
  /** The 8-digit bank account number, without separators or whitespace. */
  accountNumber: string;
  /**
   * The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or
   * whitespace.
   */
  sortCode: string;
};

export const ukLocalMandateAccountIdentificationSchema: Schema<UkLocalMandateAccountIdentification> =
  s.object<UkLocalMandateAccountIdentification>({
    type: s.defaulted(s.string(), "ukLocal"),
    accountNumber: s.string(),
    sortCode: s.string(),
  });
